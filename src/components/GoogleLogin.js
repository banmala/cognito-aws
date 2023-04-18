import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = process.env.REACT_APP_Google_ClientId;

function LoginUsingGoogle() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // refreshTokenSetup(res);
    console.log("res: ", res)
  };

  const onFailure = (res) => {
    console.log('Login failed login using google:', res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={false}
      />
    </div>
  );
}

export default LoginUsingGoogle;