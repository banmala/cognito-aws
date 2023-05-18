import React, {useState} from "react";
import auth from "../../auth/authFinal/auth";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log("Asdfasdf")
            const result = await auth.signUp(email, password);
            console.log("result at signup page : ", result);
        }catch(error){
            console.log("errorasdfasdf sadfasdf : ", error);
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