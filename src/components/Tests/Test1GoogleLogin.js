// import { useState } from 'react';
// import { GoogleAuth } from 'google-auth-library';
// import { CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
// import UserPool from '../auth/UserPool';

// function LoginWithGoogle() {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleGoogleLogin = async () => {
//     setIsLoading(true);

//     const auth = new GoogleAuth({
//       clientId: process.env.REACT_APP_Google_ClientId,
//     });
//     const user = await auth.signIn();


//     const emailAttribute = new CognitoUserAttribute({
//       Name: 'email',
//       Value: user.getBasicProfile().getEmail(),
//     });

//     const authData = {
//       Email: user.getBasicProfile().getEmail(),
//       Token: user.getAuthResponse().id_token,
//     };

//     const cognitoUser = new CognitoUser({
//       Username: emailAttribute.getValue(),
//       Pool: UserPool,
//     });
//     cognitoUser.authenticateUser(authData, {
//       onSuccess: (result) => {
//         console.log('Logged in', result);
//         setIsLoading(false);
//       },
//       onFailure: (error) => {
//         console.error('Error logging in', error);
//         setIsLoading(false);
//       },
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleGoogleLogin}>Login with Google</button>
//       {isLoading && <div>Loading...</div>}
//     </div>
//   );
// }

// export default LoginWithGoogle;