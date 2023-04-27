import './App.css';
import LoginUsingGoogle from './components/LoginUsingGoogle';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginUsingMS from './components/LoginUsingMSClass';
import {LoginUsingMSFunction} from './components/LoginUsingMS Function';
import GoogleLoginApp from './components/Tests/Google';
function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_Google_ClientId}>
      <div>
        {/* <Signup />
        <br/>
        <ConfirmSignup />
        <br/>
        <Login /> */}
        {/* <GoogleLoginApp /> */}
        <br/>
        <LoginUsingGoogle />
        <LoginUsingMSFunction />
        <br />
        <GoogleLoginApp />
        {/* <LoginUsingMS /> */}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;