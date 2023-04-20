import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from "./UserPool";

const AuthenticateWithCognito = (idToken) => {
  const googleAuthProvider = {
    ProviderName: 'Google',
    ProviderAttributeValue: idToken
  };

  const cognitoUser = new CognitoUser({
    Username: 'google_' + idToken, // A unique username that identifies the user in Cognito
    Pool: UserPool
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