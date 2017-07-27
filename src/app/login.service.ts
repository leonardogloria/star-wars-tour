import { Injectable } from '@angular/core';
import {AuthenticationDetails, CognitoUser} from "amazon-cognito-identity-js";
import {CognitoUtil} from './cognito.service'
import * as AWS from "aws-sdk/global";
import * as STS from "aws-sdk/clients/sts";

@Injectable()
export class LoginService {

  constructor(private cognitoUtil:CognitoUtil) { }
  authenticate(){
      let authenticationData = {
            Username: 'contato@leonardogloria.com.br',
            Password: '123456789',
        };
        let authenticationDetails = new AuthenticationDetails(authenticationData);

        let userData = {
            Username: 'contato@leonardogloria.com.br',
            Pool: this.cognitoUtil.getUserPool()
        };

        let cognitoUser = new CognitoUser(userData);

         cognitoUser.authenticateUser(authenticationDetails, {
           
            onSuccess: function (result) {

                console.log("In authenticateUser onSuccess callback");

                //console.log("JWT ====== " + result.getIdToken().getJwtToken());
                console.log("IDToken ====== " + JSON.stringify(result));


            },
            onFailure: function (err) {
                console.log("falhei" + err)
            },
        });
  }

}
