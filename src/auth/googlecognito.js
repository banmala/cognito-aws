import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from "./UserPool";
import jwt_decode from "jwt-decode";

const AuthenticateWithCognito = async (idToken) => {
  const decodedToken = jwt_decode(idToken);
  const googleAuthProvider = {
    ProviderName: 'Google',
    ProviderAttributeValue: idToken
  };

  const cognitoUser = new CognitoUser({
    Username: decodedToken.email, // A unique username that identifies the user in Cognito
    Pool: UserPool,
    Storage: window.localStorage
  });

  cognitoUser.authenticateUser(
    googleAuthProvider,
    {
      onSuccess: function(result) {
        console.log('Authentication successful', result);
      },
      onFailure: function(error) {
        console.log('Authentication failed', error);
      }
    }
  );
}

export {AuthenticateWithCognito};