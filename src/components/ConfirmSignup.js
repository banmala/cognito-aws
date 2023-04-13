import React, {useState} from "react";
import AWS from "aws-sdk";
const ConfirmSignup = () => {   
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    AWS.config.update({
        region: 'ap-southeast-2'
    });
    var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

    const onSubmit = (e) => {
        e.preventDefault();
        var params = {
            ClientId: process.env.REACT_APP_Cognito_ClientId,
            Username: email,
            ConfirmationCode: code,
        };
        cognitoidentityserviceprovider.confirmSignUp(params, function(err, data) {
            if(err){
                console.log("Error: ",err, err.stack);
            }else{
                console.log("data: ",data);
            }
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br/>

                <label>Confirmation Code</label>
                <input type="text" value={code} onChange={e => setCode(e.target.value)} />
                <br/>
                <button type="submit">Confirm Email</button>
            </form>
        </div>
    );
};

export default ConfirmSignup;