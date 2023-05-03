import { GoogleLogin } from '@react-oauth/google';
// import { AuthenticateWithCognitoSignup } from '../../auth/authFinal/googlecognitoSignup';
// import { AuthenticateWithCognitoLogin } from '../../auth/authFinal/googleCognitoLogin';

const clientId = process.env.REACT_APP_Google_ClientId;
function LoginUsingGoogle() {
  const onSuccess = (res) => {
    console.log("res: ", res);
    // AuthenticateWithCognitoSignup(res.credential);
    AuthenticateWithCognitoLogin(res.credential);
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
        buttonText="Login with Google"
        isSignedIn={false}
      />
    </div>
  );
}
// import { useGoogleLogin } from '@react-oauth/google';
// function LoginUsingGoogle(){
//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => {
//       console.log("codeResponse: ",codeResponse);
//       AuthenticateWithCognito(codeResponse.access_token);
//     },
//     // flow: 'auth-code',
//   });
  
//   return(
//     <button onClick={() => login()}>
//     Sign in with Google 🚀{' '}
//   </button>
//   )
// }
export default LoginUsingGoogle;