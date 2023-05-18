import React, { Component } from 'react'

export default class CognitoLoginClassBased extends Component {
  componentDidMount(){
    const location = window.location;
    console.log("location: ", location);
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    console.log("code: ", code)
    if(code){
      this.exchangeToken(code);
    }
  }

  handleLogin(){
    const clientId = process.env.REACT_APP_Cognito_ClientId;
    const redirectUri = 'http://localhost:3000/login';
    const responseType = 'code';
    const scope = 'openid email phone';
    // const state = 'AMbdmDnvGPI9JC3mCiF9Dr4_ypa8tQOeSO0OjFh6iZtCp6qpQpBwg3yxeyqCGs8c9s7yO9V1tvRCeBJCPa85O0a5Hc2K7cyHpO_ffrW2nPS25GB54eGP0qLvO3ydYdOWC-wibQXUGOO0ujfQCWVGQkcHLHWL92wPadX-o-jIa0oM1az-pHGX9a_ohaReWpI-HOZJA03XM4gd9Z5I_vfue4EwD51VmlAGcNkRL_BVGRkMjSuIGUczp2BdmCK5D71AhwXNkBGOLl4lDouvXsbn82tux8Q4WtS5XVKHjhgr0Tp2HmkU6-oz0V24S_eOxSvFrIWr4Tmkl6gfXE7OPR50lfrcfdAslJV2';
    const identityProvider = 'Google';

    const authorizeUrl = `https://concertodev.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&identity_provider=${identityProvider}`;

    window.location.href = authorizeUrl;
  };

  async exchangeToken(code){
    const clientId = process.env.REACT_APP_Cognito_ClientId;
    const clientSecret = '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';
    const grantType = 'authorization_code';
    const redirectUri = 'http://localhost:3000/login';
    const tokenUrl = `https://concertodev.auth.ap-southeast-2.amazoncognito.com/oauth2/token`;
    console.log("here")
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=${grantType}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}`
    });
    console.log("here then")
    const data = await response.json();
    console.log("data fromexchange = ", data)
    console.log("data.accesstoken fromexchange = ", data.access_token)
  };

  render() {
    return (
      <div>
        <p>CognitoLoginClassBased</p>
        <button onClick={this.handleLogin}>Login with Google Class Based</button>
      </div>
    )
  }
}