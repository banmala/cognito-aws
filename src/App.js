import './App.css';
import LoginUsingGoogle from './components/LoginUsingGoogle';
import { GoogleOAuthProvider } from '@react-oauth/google';
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
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;