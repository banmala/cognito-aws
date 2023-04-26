import AWS from "aws-sdk";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";

AWS.config.update({
    region: 'ap-southeast-2'
});
export var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

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
    },
    // signInwithMS:(accessToken)=>{
    //     // const msalInstance = new msal.PublicClientApplication(msalConfig);        
    //     const cognitoUser = userPool.getCurrentUser();
    //     if (cognitoUser) {
    //     cognitoUser.getSession((err, session) => {
    //         if (err) {
    //         reject(err);
    //         } else if (!session.isValid()) {
    //         cognitoUser.signOut();
    //         resolve(null);
    //         } else {
    //         const idToken = session.getIdToken().getJwtToken();
    //         if (accessToken) {
    //             resolve(cognitoUser);
    //         } else {
    //             msalInstance
    //             .acquireTokenSilent({
    //                 scopes: ['openid', 'profile', cognitoConfig.UserPoolId],
    //                 account: msalInstance.getAccountByUsername(session.getIdToken().payload.preferred_username),
    //             })
    //             .then((res) => {
    //                 cognitoUser
    //                 .authenticateUser(new AuthenticationDetails({ AccessToken: res.accessToken }), {
    //                     onSuccess: () => {
    //                     resolve(cognitoUser);
    //                     },
    //                     onFailure: () => {
    //                     reject();
    //                     },
    //                 });
    //             })
    //             .catch(() => {
    //                 reject();
    //             });
    //         }
    //         }
    //     });
    //     } else {
    //     resolve(null);
    //     }
    //     return user;
    // }
    // signInWithGoogleProvider: () =>{

    //     var params = {
    //         IdpIdentifier: 'STRING_VALUE', /* required */
    //         UserPoolId: process.env.REACT_APP_Cognito_UserPoolId, /* required */
    //       };
    //       cognitoidentityserviceprovider.getIdentityProviderByIdentifier(params, function(err, data) {
    //         if (err) console.log(err, err.stack); // an error occurred
    //         else     console.log(data);           // successful response
    //       });
    // }
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
