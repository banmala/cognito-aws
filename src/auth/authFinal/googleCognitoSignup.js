import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from "./UserPool";
import jwt_decode from "jwt-decode";

const AuthenticateWithCognitoSignup = (idToken) => {

  console.log("idToken: ", idToken)
  const decodedToken = jwt_decode(idToken);  
  // const signUpParams = {
  //   // Username: decodedToken.email,
  //   // Password: 'C-mylovemango0@',
  //   // UserAttributes: [
  //   //   {
  //   //     Name: 'email',
  //   //     Value: decodedToken.email
  //   //   },
  //   //   {
  //   //     Name: 'given_name',
  //   //     Value: decodedToken.given_name
  //   //   },
  //   //   {
  //   //     Name: 'family_name',
  //   //     Value: decodedToken.family_name
  //   //   }
  //   // ],
  //   ValidationData: [
  //     { Name: 'google_access_token', Value: idToken }
  //   ],
  //   CallBack: ((err,data)=>{ 
  //     if(err){
  //       console.log("err:", err);
  //     }else{
  //       console.log("data:", data);
  //     }
  //   }),
  //   // ClientMetadata: null
  // };
  // UserPool.signUp(
  //   signUpParams,
  //   (err,data)=>{
  //     if(err){
  //       console.log("err:", err);
  //     }else{
  //       console.log("data:", data);
  //     }
  //   }
  // );
  UserPool.signUp(
    null, null, [],
    // decodedToken.email,
    // 'C-something0@',
    // [
    //   {
    //     Name: 'email',
    //     Value: decodedToken.email
    //   },
    //   {
    //     Name: 'given_name',
    //     Value: decodedToken.given_name
    //   },
    //   {
    //     Name: 'family_name',
    //     Value: decodedToken.family_name
    //   }
    // ],
    [
      { Name: 'google_access_token', Value: idToken }
    ],
    (err,data)=>{
      if(err){
        console.log("err:", err);
      }else{
        console.log("data:", data);
      }
    }
  );
}

export {AuthenticateWithCognitoSignup};