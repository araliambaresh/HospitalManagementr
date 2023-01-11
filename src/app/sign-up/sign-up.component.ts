import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

@Output() signupEmit = new EventEmitter();

name = '';
email = "";
age = '';
dateOfBirth = '';
mobile = '';
gender = '';
password = '';
confirmPassword = '';


signup(){

  if(this.name=='' || this.email=='' || this.age==''|| this.dateOfBirth=='' ||
   this.mobile=='' || this.gender=='' || this.password=='' || this.confirmPassword=='' ){
    alert(" fields cannot be empty");
    return ;
    
  }
  else if(this.password!==this.confirmPassword){
    alert("password mismatch");
    return ;
  }

  let signupDetails ={
   name:this.name,
   age:this.age,
   email:this.email,
   mobileNumber:this.mobile,
   dateOfBirth:this.dateOfBirth,
   gender:this.gender,
   password:this.password
  }
this.signupEmit.emit(signupDetails);

}
}
