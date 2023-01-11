import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../serviceFolder/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email ='';
  password = '';
  constructor(private route:Router,private myService:ServiceService){

  }
  @Output() loginDetails = new EventEmitter();
  @Output() changeToSignIn = new EventEmitter();
  login(){
    let loginData = {
      email:this.email,
      password:this.password
    }
this.loginDetails.emit(loginData);
  }
  changeToSignUp(){
    this.changeToSignIn.emit();
  }


 
}
