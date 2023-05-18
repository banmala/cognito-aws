import AWS from "aws-sdk";
import { CognitoUser, AuthenticationDetails, CognitoUserAttribute } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";

AWS.config.update({
    region: 'ap-southeast-2'
});
export var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const auth = {
    signUpConfirm: (email, code)=>{
        // var params = {
        //     ClientId: process.env.REACT_APP_Cognito_ClientId,
        //     Username: email,
        //     ConfirmationCode: code,
        // };
        // cognitoidentityserviceprovider.confirmSignUp(params, function(err, data) {
        //     if(err){
        //         throw err;
        //     }else{
        //         return data;
        //     }
        // });
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });
        user.confirmRegistration(code, true, function(err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log(' confirmRegistration call result: ' + result);
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

        return user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("data: ", data)
                return data;
            },
            onFailure: (err) => {
                throw err;
            }
        });
    },
    signUp:(email, password)=>{
        return new Promise((resolve,reject)=>{
            const dataEmail = {
                Name: 'email',
                Value: email,
            };
            const dataPhoneNumber = {
                Name: 'phone_number',
                Value: '+9898989898',
            };
            const attributeEmail = new CognitoUserAttribute(dataEmail);
            const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);        
            const attributeList = [];
            attributeList.push(attributeEmail);
            attributeList.push(attributePhoneNumber);
            UserPool.signUp(email, password, [], null, (err, data) => {
                if (err) {
                    console.log("err: ", err);
                    reject(err);
                }else{
                    console.log("data: ", data)
                    resolve(data);
                }
            })
        })
        
    },

    getUser:(email)=>{
        // const user = new CognitoUser({
        //     Username: email,
        //     Pool: UserPool
        // });
        // console.log("user: ", user)
        // user.getUserAttributes((err, result)=>{
        //     if (err) {
        //         throw(err);
        //     }
        //     return result
        // });
        cognitoidentityserviceprovider.adminGetUser(
            {Username: email,UserPoolId:UserPool.getUserPoolId()},
            (err,data)=>{
                if(err){
                    console.log("err: ", err);
                }
                console.log("data: ", data)
            }
        )
    },

    deleteUser: (email) => {
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });
        user.deleteUser(function(err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
        });
    }
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
                    // cognitoUser
                    // .authenticateUser(new AuthenticationDetails({ AccessToken: res.accessToken }), {
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
