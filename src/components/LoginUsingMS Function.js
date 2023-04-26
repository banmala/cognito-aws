import { useState } from "react";
import {msconfig} from "../auth/ms.config";
import { PublicClientApplication } from "@azure/msal-browser";
import {cognitoidentityserviceprovider} from "../auth/auth";
import UserPool from "../auth/UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

export const maslConfig = {
    auth: {
        clientId: msconfig.application_client_id,
        redirectUri: msconfig.redirectUrl,
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
}

const signInwithMS = (email, accessToken) => {
    const cognitoUser = UserPool.getCurrentUser();
    console.log("here1")
    console.log("cognitoUser: ", cognitoUser)
    if (cognitoUser) {
        console.log("here2")
        // cognitoUser.getSession((err, session) => {
            //     if (err) {
        //     reject(err);
        //     } else if (!session.isValid()) {
        //     cognitoUser.signOut();
        //     resolve(null);
        //     } else {
        //     const idToken = session.getIdToken().getJwtToken();
        //     if (accessToken) {
        //         resolve(cognitoUser);
        //     } else {
        //         msalInstance
        //         .acquireTokenSilent({
        //             scopes: ['openid', 'profile', cognitoConfig.UserPoolId],
        //             account: msalInstance.getAccountByUsername(session.getIdToken().payload.preferred_username),
        //         })
        //         .then((res) => {
            cognitoUser
            .authenticateUser(new AuthenticationDetails({ AccessToken: accessToken }), {
                onSuccess: (data) => {
                    console.log("data: ", data)
                    // resolve(cognitoUser);
                },
                onFailure: (error) => {
                    console.log("error: ", error);
                    // reject();
                },
            });
            console.log("here3")
            //         })
            //         .catch(() => {
                //             reject();
        //         });
        //     }
        //     }
        // });
    } else {
        // resolve(null);
    }
    return UserPool;
}
export const LoginUsingMSFunction = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const publicClientApplication = new PublicClientApplication(maslConfig);

    const handleLogin = async () => {
        try {
            const loginResponse = await publicClientApplication.loginPopup();
            console.log('User logged in: ', loginResponse);
            localStorage.setItem("msalAccount", loginResponse.account.homeAccountId);
            setIsAuthenticated(true);
            const user = signInwithMS(loginResponse.account.username, loginResponse.accessToken);
            // console.log("user: ", user);
        } catch (error) {
          console.log('Error logging in: ', error);
        }
    };
    const handleLogout = async () => {
        try {
            const homeAccountId = localStorage.getItem("msalAccount");
            const logoutRequest = {
                account: publicClientApplication.getAccountByHomeId(homeAccountId),
                mainWindowRedirectUri: "http://localhost:3000/logout",
            };
            await publicClientApplication.logoutPopup(logoutRequest);
            sessionStorage.clear();
            localStorage.removeItem("msalAccount");
            setIsAuthenticated(false);
        } catch (error) {
          console.log('Error logging in', error);
        }
    };

    return (
        <div>
            {
                isAuthenticated ? 
                <p>
                    Successful Logged In using Functional Component
                    <button onClick={() => handleLogout()}>Log Out</button>
                </p>
                :
                <button onClick={() => handleLogin()}>
                    Log In with MS Functional Component
                </button>
            }
        </div>
    );
}