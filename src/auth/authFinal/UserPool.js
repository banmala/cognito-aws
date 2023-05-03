import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: process.env.REACT_APP_Cognito_UserPoolId,
    ClientId: process.env.REACT_APP_Cognito_ClientId
}
// eslint-disable-next-line
export default new CognitoUserPool(poolData);