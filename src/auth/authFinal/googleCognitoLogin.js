import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from "./UserPool";
import jwt_decode from "jwt-decode";

const AuthenticateWithCognitoLogin = (idToken) => {

  const decodedToken = jwt_decode(idToken);
  //google authentication (Login)
  // Username: string;
  // Password?: string;
  // ClientMetadata?: ClientMetadata;
  const googleAuthProvider = {
    // ProviderName: 'Google',
    // ProviderAttributeValue: idToken,
    Username: decodedToken.email,
    ValidationData: { ProviderName: 'Google', ProviderAttributeValue: idToken }
    // AccessToken: idToken,
    // ValidationData: idToken,
		// ClientMetadata: idToken,
    // UserContextData: idToken, 
    // AuthFlow: 'USER_SRP_AUTH',
    // AuthParameters: {
    //   USERNAME: 'google_' + decodedToken.email,
    //   PASSWORD: 'google_' + decodedToken.email,
    //   SECRET_HASH: 'google_' + decodedToken.email,
    // },
  };

  const cognitoUser = new CognitoUser({
    Username: 'google_' + decodedToken.email, // A unique username that identifies the user in Cognito
    Pool: UserPool
  });

  const authenticationDetails = new AuthenticationDetails(googleAuthProvider);
  console.log("authenticationDetails: ", authenticationDetails);
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

export {AuthenticateWithCognitoLogin};