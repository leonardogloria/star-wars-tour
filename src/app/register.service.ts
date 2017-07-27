import { Injectable } from '@angular/core';
import {CognitoUtil} from './cognito.service'
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute} from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";

@Injectable()
export class RegisterService {
  constructor(private cognitoUtil:CognitoUtil) { }

  register(){
      let attributeList = [];

        let dataEmail = {
            Name: 'email',
            Value: 'contato@leonardogloria.com.br'
        };
       
        attributeList.push(new CognitoUserAttribute(dataEmail));

        this.cognitoUtil.getUserPool().signUp('contato@leonardogloria.com.br','123456789', attributeList, null, function (err, result) {
            if (err) {
                console.log("Error: " + err.message)
                
            } else {
                console.log("UserRegistrationService: registered user is " + result);
                
            }
        });
  }
       confirmRegistration(username: string, confirmationCode: string): void {
        
        let userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };

        let cognitoUser = new CognitoUser(userData);

        cognitoUser.confirmRegistration(confirmationCode, true, function (err, result) {
            if (err) {
                console.log("Error:  " + err)
            } else {
                console.log("Sucesso ")
                
            }
        });
    }
      


}
