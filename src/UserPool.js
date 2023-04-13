import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "ap-southeast-2_BJM4uzFdR",
    ClientId: "ejgmmghdr8lbtc2h4ha0ov1ii"
}
// eslint-disable-next-line
export default new CognitoUserPool(poolData);