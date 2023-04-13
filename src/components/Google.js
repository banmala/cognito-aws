import React, { useEffect } from "react";

const GoogleLogin = () => {

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "779367105682-t1b0p4qn3q1ng68sffa4ffpienhr5hgt.apps.googleusercontent.com",
            callback: (response) => {
                console.log("Encoded Jwt token: ",response.credentials);
            }
        });
        google.accounts.id.renderButton(
            document.getElementById("google-button"),
            {
                theme: "outline",
                size: "large",
            }
        );
    },[]);

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