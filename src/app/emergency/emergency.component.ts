import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../serviceFolder/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {

  name = '';
  age = '';
  mobileNumber = '';
  address = '';
  city = '';

  constructor(private service:ServiceService,private route:Router){

  }
  ngOnInit() {
      
  }

  async submitDetails(){
    if(this.name=='' || this.mobileNumber=='' ||this.age=='' || this.address=='' || this.city==''){
      alert("Fields cannot be empty");
      return;
    }
    let emergencyDetails = {
      name:this.name,
      age:this.age,
      city:this.city,
      address:this.address,
      mobileNumber:this.mobileNumber
    };

    await this.service.dataManipulation("POST","insertEmergencyBooking",emergencyDetails)
    alert("registered succesfully")
    this.route.navigateByUrl("/homePage");

  }
}
