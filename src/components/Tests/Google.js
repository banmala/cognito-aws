import React from 'react';
import { CognitoAuth } from 'amazon-cognito-auth-js';

const config = {
  ClientId: process.env.REACT_APP_Cognito_ClientId,
  AppWebDomain: 'concertodev.auth.ap-southeast-2.amazoncognito.com',
  RedirectUriSignIn: 'https://localhost:3000/signin',
  RedirectUriSignOut: 'https://localhost:3000/signout',
  IdentityProvider: 'Google',
  UserPoolId: process.env.REACT_APP_Cognito_UserPoolId,
  Scope: ['openid', 'email', 'profile'],
  TokenScopesArray: ['openid', 'email', 'phone'],
  // ResponseType: 'code',
  // RedirectUri: 'https://localhost:3000/callback',
};

const auth = new CognitoAuth(config);

function GoogleLoginApp() {
  const handleSignIn = (response) => {
    console.log("response: ", response);
    console.log("auth: ", auth)
    auth.getSession();
  };

  return (
    <div>
      <button onClick={handleSignIn}>Google Login</button>
    </div>
  );
}

export default GoogleLoginApp;
// https://concertodev.auth.ap-southeast-2.amazoncognito.com/login?client_id=ejgmmghdr8lbtc2h4ha0ov1ii&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback