import React, {useState} from "react";
import auth from "../../auth/authFinal/auth";

const ConfirmSignup = () => {   
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        try{
            const result = auth.signUpConfirm(email, code);
            console.log("result: ", result);
        }
        catch(err){
            console.log("Error: ", err);
        }
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