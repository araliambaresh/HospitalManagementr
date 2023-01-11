import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../serviceFolder/service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
constructor(private route:Router,private myService:ServiceService){

}
changeNavBarIcon = true;
async login(loginUser:any){
  if(loginUser.email=='' || loginUser.password==''){
    alert('fields cannot be empty');
    return ;
  }

  let  userDetails = await this.myService.dataManipulation("GET","getAllUsers",null);
  if(userDetails.length==0){
    alert("user not found");
  }
  else{
    let userExist ='';
          // userExist=  userDetails.filter((user:any)=>(user.email===loginUser.email) && (user.password===loginUser.password));
          userDetails.forEach((user:any) => {
           if( (user.email===loginUser.email) && (user.password===loginUser.password)){
            userExist = user;
           }
          });
    if(!(userExist==='')){
     
      this.changeNavBarIcon = false;
      await this.myService.dataManipulation("POST","insertCurrentUser",loginUser)
      this.route.navigateByUrl('/userDashBoard');
    }
    else{
      alert("user not found");
    }
  }
}

navigateToSignUp(){
  this.route.navigateByUrl('/userSignup');
}



}
