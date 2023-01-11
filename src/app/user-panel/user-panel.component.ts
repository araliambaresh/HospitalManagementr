import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceService } from '../serviceFolder/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(private service:ServiceService,private route:Router){

  }
  toggleLogout = false;
   user:any={};
   currentUser:any ={};
   @Output() changeNavBarHeading = new EventEmitter();
  async ngOnInit(){
       // for getting currentUser details 
       let currentUser = await this.service.dataManipulation("GET","getAllCurrentUsers",null);
       let allUsers = await this.service.dataManipulation("GET","getAllUsers",null);
       currentUser = currentUser[currentUser.length-1];
       this.currentUser = currentUser;
         let user:any;
         allUsers.forEach((element:any) => {
           if(element.email===currentUser.email){
             user =element;
             
           }
           
         });
         this.user = user

  }
  showLogOut(){
    this.toggleLogout = ! this.toggleLogout;
  }
  
  async logout(){

      await this.service.dataManipulation("DELETE","deleteCurrentUser/"+this.currentUser.email,null)
    this.toggleLogout = ! this.toggleLogout;
    alert("ALERT LOGOUT SUCCESFULL")
    this.changeNavBarHeading.emit();
    this.route.navigateByUrl("/homePage");

  }
  cancel(){
    this.toggleLogout = ! this.toggleLogout;
  }
}
