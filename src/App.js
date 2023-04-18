// import GoogleLogin, { GoogleLogout } from 'react-google-login';
import './App.css';
import GoogleLoginApp from './components/Google';
import LoginUsingGoogle from './components/GoogleLogin';

function App() {
  return (
    <div>
      {/* <Signup />
      <br/>
      <ConfirmSignup />
      <br/>
      <Login /> */}
      <br/>
      <GoogleLoginApp />
      {/* <GoogleLogout /> */}
      <LoginUsingGoogle />
    </div>
  );
}

export default App;