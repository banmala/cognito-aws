import React, {useState} from "react";
import auth from "../../auth/authFinal/auth";

const DeleteUser = () => {
    const [email, setEmail] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        try{
            const result = auth.deleteUser(email);
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
                <button type="submit">deleteUser</button>
            </form>
        </div>
    );
};

export default DeleteUser;