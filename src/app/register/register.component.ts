import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {RegisterService} from '../register.service'
import {LoginService} from '../login.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User
  isSucess : boolean 
  constructor(private registerService:RegisterService
              ,private loginService:LoginService) { 
    this.user = new User();
    this.isSucess = false
  }

  ngOnInit() {
  }
  save(){
    this.registerService.register()
    this.isSucess = true
    console.log(this.user)
  }
  confirm(){
    this.registerService.confirmRegistration(this.user.email,this.user.confirmationCode);
    
  }
  login(){
    this.loginService.authenticate();
  }

}
