import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/serviceFolder/service.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent {

  constructor(private route:Router,private service:ServiceService){

  }
  async adminSignup(adminSignupData:any){
    let signupDetails ={
      email:adminSignupData.email,
      name:adminSignupData.name,
      age:adminSignupData.age,
      mobileNumber:adminSignupData.mobileNumber,
      dateOfBirth:adminSignupData.dateOfBirth,
      gender:adminSignupData.gender,
      password:adminSignupData.password
     }
     alert(adminSignupData.mobileNumber);

      let adminUser = await this.service.dataManipulation("GET","getAllAdminUsers",null);
      if(adminUser.length==0){
        await this.service.dataManipulation("POST","insertAdminUser",signupDetails)
        alert("registration successfull");

        this.route.navigateByUrl("/adminLogin");
      }
      else{
        let  adminExist = ''
        adminExist =adminUser.filter((admin:any)=>admin.email===signupDetails.email);
       console.log(adminExist)
        if(adminExist==''){
          await this.service.dataManipulation("POST","insertAdminUser",signupDetails);
          alert("registration successfull");

          this.route.navigateByUrl("/adminLogin");
        }
        else{
          alert("user already exist ");
        }

      }

  }
}
