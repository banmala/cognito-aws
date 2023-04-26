import { Component } from "react";
import {msconfig} from "../auth/ms.config";
import { PublicClientApplication } from "@azure/msal-browser";

class LoginUsingMS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isAuthenticated: false,
            user: {}
        };
        this.login = this.login.bind(this);

        this.publicClientApplication = new PublicClientApplication({
            auth: {
                clientId: msconfig.application_client_id,
                redirectUri: msconfig.redirectUrl,
            },
            cache: {
                cacheLocation: "sessionStorage",
                storeAuthStateInCookie: true
            }
        });
    }
    async login(){
        try{
            //login via popup
            const loginResponse = await this.publicClientApplication.loginPopup({
                scopes: msconfig.scopes,
                prompt: "select_account",
                redirectUri : msconfig.redirectUrl
            });
            console.log("loginResponse: ", loginResponse);
            //get account
            this.setState({isAuthenticated:true});

        }
        catch(error){
            this.setState({
                isAuthenticated: false,
                user:{},
                error: error
            })
        }
    }
    async logout(){
        this.publicClientApplication.logout();
    }

    render(){
        return (
            <div>
                {
                    this.state.isAuthenticated ? <p>Successful Logged In</p> :
                    <button onClick={() => this.login()}>Log In</button>
                }
            </div>
        );
    }
}

export default LoginUsingMS;