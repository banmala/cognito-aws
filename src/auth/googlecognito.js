import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from "./UserPool";
import jwt_decode from "jwt-decode";

const AuthenticateWithCognito = (idToken) => {
  console.log("idToken: ", idToken)
  const decodedToken = jwt_decode(idToken);  
  // const signUpParams = {
  //   Username: decodedToken.email,
  //   Password: 'C-mylovemango0@',
  //   UserAttributes: [
  //     {
  //       Name: 'email',
  //       Value: decodedToken.email
  //     },
  //     {
  //       Name: 'given_name',
  //       Value: decodedToken.given_name
  //     },
  //     {
  //       Name: 'family_name',
  //       Value: decodedToken.family_name
  //     }
  //   ],
  //   ValidationData: [
  //     { Name: 'google_access_token', Value: idToken }
  //   ],
  //   ClientMetadata: null
  // };

  UserPool.signUp(
    decodedToken.email, 'C-mylovemango0@',
    [
      {
        Name: 'email',
        Value: decodedToken.email
      },
      {
        Name: 'given_name',
        Value: decodedToken.given_name
      },
      {
        Name: 'family_name',
        Value: decodedToken.family_name
      }
    ],
    [
      { Name: 'google_access_token', Value: idToken }
    ],
    (err,data)=>{
      if(err){
        console.log("err:", err);
      }else{
        console.log("data:", data);
      }
    }
  );
  // UserPool.signUp(
  //   signUpParams,
  //   (err,data)=>{
  //     if(err){
  //       console.log("err:", err);
  //     }else{
  //       console.log("data:", data);
  //     }
  //   }
  // );



//   console.log("microsoft");
//   const googleAuthProvider = {
//     ProviderName: 'Google',
//     ProviderAttributeValue: idToken,
//     // AccessToken: idToken,
//     // ValidationData: idToken,
// 		// ClientMetadata: idToken,
//     // UserContextData: idToken, 
//     // AuthFlow: 'USER_SRP_AUTH',
//     // AuthParameters: {
//     //   USERNAME: 'google_' + decodedToken.email,
//     //   PASSWORD: 'google_' + decodedToken.email,
//     //   SECRET_HASH: 'google_' + decodedToken.email,
//     // },
//   };
//   console.log("tesla");

//   const cognitoUser = new CognitoUser({
//     Username: 'google_' + decodedToken.email, // A unique username that identifies the user in Cognito
//     Pool: UserPool
//   });

//   console.log("hereeeeee");
//   const authenticationDetails = new AuthenticationDetails(googleAuthProvider);
//   cognitoUser.authenticateUser(
//     authenticationDetails,
//     {
//       onSuccess: function(result) {
//         console.log('Authentication successful', result);
//       },
//       onFailure: function(error) {
//         console.log('Authentication failed', error);
//       },
//       newPasswordRequired: function(userAttributes, requiredAttributes) {
//         console.log("asdfasdf: ", userAttributes, requiredAttributes);
//       }
//     }
//   );
}

export {AuthenticateWithCognito};