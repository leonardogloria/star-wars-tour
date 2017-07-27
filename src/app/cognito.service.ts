import { Injectable } from '@angular/core';
import {
    AuthenticationDetails,
    CognitoIdentityServiceProvider,
    CognitoUser,
    CognitoUserAttribute,
    CognitoUserPool
} from "amazon-cognito-identity-js";
import * as AWS from 'aws-sdk';
import * as awsservice from "aws-sdk/lib/service";
import * as CognitoIdentity from "aws-sdk/clients/cognitoidentity";

@Injectable()
export class CognitoUtil {

  public static _REGION = 'us-east-1';
  public static _IDENTITY_POOL_ID = 'us-east-1:229527384225:userpool/us-east-1_pjH8WT1P3';
  public static _USER_POOL_ID = 'us-east-1_pjH8WT1P3';
  public static _CLIENT_ID = '43na1dqbb8td28tdb9sfknfbuv';

   public static _POOL_DATA:any = {
        UserPoolId: CognitoUtil._USER_POOL_ID,
        ClientId: CognitoUtil._CLIENT_ID
    };
     public cognitoCreds: AWS.CognitoIdentityCredentials;

  constructor() { }
    getUserPool() {
        return new CognitoUserPool(CognitoUtil._POOL_DATA);
    }
      

}
