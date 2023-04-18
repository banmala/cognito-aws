import AWS from "aws-sdk";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";


AWS.config.update({
    region: 'ap-southeast-2'
});
var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const auth = {
    signUpConfirm: (email, code)=>{
        var params = {
            ClientId: process.env.REACT_APP_Cognito_ClientId,
            Username: email,
            ConfirmationCode: code,
        };
        cognitoidentityserviceprovider.confirmSignUp(params, function(err, data) {
            if(err){
                throw err;
            }else{
                return data;
            }
        });
    },
    logIn: (email, password) => {
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                return data;
            },
            onFailure: (err) => {
                throw err;
            },
            newPasswordRequired: (data) => {
                throw data;
            }
        });
    },
    signUp:(email, password)=>{
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err){
                throw err;
            }
            return data;
        });
    }
    // signIn: (email: string, password: string) => {
    //     return firebase.auth().signInWithEmailAndPassword(email, password);
    // },
    // signInWithProvider: (provider: any) => {
    //     firebase.auth().languageCode = 'en';
    //     firebase.auth().signInWithRedirect(provider);
    // },
    // signOut: () => {
    //     return firebase.auth().signOut();
    // },
    // getCurrentUser: () => {
    //     return firebase.auth().currentUser;
    // },
    // createUserInFirebase: (email: string, password: string) => {
    //     return firebase.auth().createUserWithEmailAndPassword(email, password);
    // },
};

export default auth;
