import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from "./UserPool";
import jwt_decode from "jwt-decode";

const AuthenticateWithCognito = (idToken) => {
  const decodedToken = jwt_decode(idToken);  

  const googleAuthProvider = {
    ProviderName: 'Google',
    // ProviderAttributeValue: idToken,
    AccessToken: idToken
  };

  const cognitoUser = new CognitoUser({
    Username: 'google_' + decodedToken.email, // A unique username that identifies the user in Cognito
    Pool: UserPool
  });

  const authenticationDetails = new AuthenticationDetails(googleAuthProvider);
  cognitoUser.authenticateUser(
    authenticationDetails,
    {
      onSuccess: function(result) {
        console.log('Authentication successful', result);
      },
      onFailure: function(error) {
        console.log('Authentication failed', error);
      },
      newPasswordRequired: function(userAttributes, requiredAttributes) {
        console.log("asdfasdf: ", userAttributes, requiredAttributes);
      }
    }
  );
}

export {AuthenticateWithCognito};