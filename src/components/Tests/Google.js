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
