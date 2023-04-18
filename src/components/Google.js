import React, { useEffect } from "react";

const GoogleLogin = () => {
    useEffect(() =>     {
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_Google_ClientId,
            callback: (response) => {
                console.log("Encoded Jwt token: ",response.credentials);
            }
        });
        google.accounts.id.renderButton(
            document.getElementById("google-button"),
            {
                theme: "outline",
                size: "small",
            }
        );
    },[]);

    // function signinCallback(authResult) {
    //     if (authResult['status']['signed_in']) {
      
    //        // Add the Google access token to the Amazon Cognito credentials login map.
    //        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    //           IdentityPoolId: 'IDENTITY_POOL_ID',
    //           Logins: {
    //              'accounts.google.com': authResult['id_token']
    //           }
    //        });
      
    //        // Obtain AWS credentials
    //        AWS.config.credentials.get(function(){
    //           // Access AWS resources here.
    //        });
    //     }
    // }

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div id="google-button">
            {/* <button type="submit" onClick={onSubmit}>Google</button> */}
        </div>
    );
};

export default GoogleLogin;