import React, {useState} from "react";
import auth from "../../auth/authFinal/auth";

const GetUser = () => {
    const [email, setEmail] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        try{
            const result = auth.getUser(email);
            console.log("result of get user: ", result);
        }catch(err){
            console.log("error of get user: ", err);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br/>
                <button type="submit">Get User</button>
            </form>
        </div>
    );
};

export default GetUser;