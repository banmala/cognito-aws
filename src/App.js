import './App.css';
// import LoginUsingGoogle from './components/componentsFinal/LoginUsingGoogle';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Login from './components/componentsFinal/Login';
// import Signup from './components/componentsFinal/Signup';
// import ConfirmSignup from './components/componentsFinal/ConfirmSignup';
import CognitoLogin from './components/components/GoogleLogin';
import CognitoLoginWithMS from './components/components/MSLogin';

function App() {
  return (
    // <GoogleOAuthProvider clientId={process.env.REACT_APP_Google_ClientId}>
    //   <div>
    //     <Login />
    //     <br />
    //     <Signup />
    //     <br />
    //     <ConfirmSignup />
    //     <LoginUsingGoogle />
    //   </div>
    // </GoogleOAuthProvider>
    <div>
      <CognitoLogin />
      <br />
      <br />
      <br />
      <br />
      <CognitoLoginWithMS />
    </div>
  );
}

export default App;