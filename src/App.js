import './App.css';
import Login from './components/componentsFinal/Login';
import Signup from './components/componentsFinal/Signup';
import ConfirmSignup from './components/componentsFinal/ConfirmSignup';
import CognitoLogin from './components/components/GoogleLogin';
import CognitoLoginClassBased from './components/components/GoogleLoginClass';
import GetUser from './components/componentsFinal/GetUser';
import DeleteUser from './components/componentsFinal/DeleteUser';

function App() {
  return (
    <div>
      <GetUser />
      <DeleteUser />
      <Login />
      <br />
      <Signup />
      <br />
      <ConfirmSignup />
      <CognitoLogin />
      <CognitoLoginClassBased />
    </div>
  );
}

export default App;