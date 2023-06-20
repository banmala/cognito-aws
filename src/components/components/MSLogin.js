import React from 'react';

const CognitoLoginWithMS = () => {
  const application_client_id = "161e3509-0118-4ea8-a1e0-2a8f9e937eb9";
  const application_tenantId = "3f2fd500-5014-4b19-a974-090eb60cffd5";

  // const exchangeToken = async (code) => {
  //   const clientId = process.env.REACT_APP_Cognito_ClientId;
  //   const clientSecret = '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';
  //   const grantType = 'authorization_code';
  //   const redirectUri = 'http://localhost:3000';
  //   const tokenUrl = `https://concertodev.auth.ap-southeast-2.amazoncognito.com/oauth2/token`;
  //   console.log("here")
  //   const response = await fetch(tokenUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: `grant_type=${grantType}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}`
  //   });
  //   console.log("here then")
  //   const data = await response.json();
  //   console.log("data fromexchange = ", data.access_token)
  //   // if(data.access_token){
  //   //   const tokenVerificationResponse = await fetch(
  //   //     "http://localhost:9002/auth/cognito/verifyjwt",
  //   //     {
  //   //       method: 'POST',
  //   //       headers: {
  //   //         'Content-Type': 'application/json'
  //   //       },
  //   //       body: JSON.stringify({"jwtToken": data.access_token})
  //   //     }
  //   //   );
  //   //   console.log("tokenVerificationResponse: ", tokenVerificationResponse);
  //   // }
  // };

  const location = window.location;
  console.log("location: ", location);
  const params = new URLSearchParams(location.search);
  const code = params.get('code');
  if(code){
    // exchangeToken(code);
    console.log("code : ", code)
  }
  const handleLogin = () => {
    const clientId = process.env.REACT_APP_Cognito_ClientId;
    const redirectUri = 'http://localhost:3000';
    const responseType = 'code';
    const scope = 'openid email phone';
    const identityProvider = 'Google';

    const authorizeUrl = `https://concertodev.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&identity_provider=${identityProvider}`;

    window.location.href = authorizeUrl;
  };

  return (
    <button onClick={handleLogin}>Login with Microsoft</button>
  );
};

export default CognitoLoginWithMS;