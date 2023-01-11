import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/serviceFolder/service.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent  implements OnInit{
  result=false;
  toggleLogout =false;
  adminUser:any = {};
  constructor(private route:Router,private adminService:ServiceService){
  
  }

  async ngOnInit() {
      let adminUsers = await this.adminService.dataManipulation("GET","getAllAdminUsers",null);
      let currentAdmins = await this.adminService.dataManipulation("GET","getAllCurrentAdmins",null);
      currentAdmins = currentAdmins[currentAdmins.length-1];
      adminUsers.forEach((admin:any) => {
        if(admin.email===currentAdmins.email){
          this.adminUser = admin;
        }
      });
  }
  changePanel(){
    this.result = !this.result;
  }
  async logout(){
      await this.adminService.dataManipulation("DELETE",`deleteCurrentAdmin/${this.adminUser.email}`,null);
    alert("logout succesfull");
    this.toggleLogout = !this.toggleLogout;
    this.route.navigateByUrl('/');
  
  }
  cancel(){
    this.toggleLogout = !this.toggleLogout;
  }
  showLogout(){
    this.toggleLogout = !this.toggleLogout;
  }
  }
  

