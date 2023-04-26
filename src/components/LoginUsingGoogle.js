import { GoogleLogin } from '@react-oauth/google';
import {AuthenticateWithCognito} from '../auth/googlecognito';
const clientId = process.env.REACT_APP_Google_ClientId;

function LoginUsingGoogle() {
  const onSuccess = (res) => {
    console.log("something!");
    console.log("res: ", res);
    AuthenticateWithCognito(res.credential);
    console.log("here");
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