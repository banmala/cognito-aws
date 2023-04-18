import './App.css';
import ConfirmSignup from './components/ConfirmSignup';
import GoogleLogin from './components/Google';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      {/* <Signup />
      <br/>
      <ConfirmSignup />
      <br/>
      <Login /> */}
      <br/>
      <GoogleLogin />
    </div>
  );
}

export default App;