import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/serviceFolder/service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private route:Router,private service:ServiceService){

  }

  switchToAdminSignup(){
    this.route.navigateByUrl("/adminSignup");
  }
  async adminLogin(loginData:any){
    if(loginData.email=='' || loginData.password==''){
      alert('fields cannot be empty');
      return ;
    }
    let adminUser = await this.service.dataManipulation("GET","getAllAdminUsers",null);
    let userExist ='';
     userExist = adminUser.filter((admin:any)=>admin.email===loginData.email && admin.password==loginData.password);
     if(!(userExist=='')){
      await this.service.dataManipulation("POST","insertCurrentAdminEntity",loginData);
      alert("login successfull");
      this.route.navigateByUrl("/adminPortal");
     }
     else{
      alert("user not found");
     }


  }

}
