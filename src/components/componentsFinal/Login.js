import React, {useState} from "react";
import auth from "../../auth/authFinal/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        try{
            const result = auth.logIn(email, password);
            console.log("result: ", result);
        }catch(err){
            console.log("error: ", err);
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;