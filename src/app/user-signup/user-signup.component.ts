import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../serviceFolder/service.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  constructor(private route:Router, private myService:ServiceService){

  }


  async signup(signupUsers:any){
    alert("inside");
    let users = await this.myService.dataManipulation("GET","getAllUsers",null);
      if(users.length==0){
        await this.myService.dataManipulation("POST","insertUser",signupUsers);
        alert('registration succesfull');
        this.route.navigateByUrl("/userLogin");
      }
      else{
        let result = '';
         result = users.filter((user:any)=>user.email==signupUsers.email);
        if(result!==''){
          await this.myService.dataManipulation("POST","insertUser",signupUsers);
          alert('registration succesfull'); 
          this.route.navigateByUrl("/userLogin");
        }
        else{
          alert("user already exist please login");
        }

      }

  }


}
