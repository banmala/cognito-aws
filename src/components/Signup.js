import React, {useState} from "react";
import auth from "../auth/auth";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();

        try{
            const result = auth.signUp(email, password);
            console.log("result: ", result);
        }catch(error){
            console.log("error: ", error);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br/>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;