import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../serviceFolder/service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit{

  constructor(private service:ServiceService){

  }
    name ='';
    email = '';
    mobileNumber ='';
    gender ='';
    dateOfBirth='';
    age = '';

    async ngOnInit(){
         // for getting currentUser details 
         let currentUser = await this.service.dataManipulation("GET","getAllCurrentUsers",null);
         let allUsers = await this.service.dataManipulation("GET","getAllUsers",null);
         currentUser = currentUser[currentUser.length-1];
           let user:any;
           allUsers.forEach((element:any) => {
             if(element.email===currentUser.email){
               user =element;
               
             }
             
           });
            this.name=user.name ;
           this.email= user.email;
            this.mobileNumber= user.mobileNumber;
           this.gender =  user.gender;
            this.dateOfBirth = user.dateOfBirth;
            this.age = user.age; 
    }


}
