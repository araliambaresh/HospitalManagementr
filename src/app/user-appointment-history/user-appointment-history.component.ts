import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../serviceFolder/service.service';
import { getPresentDate } from '../dataFormat';

@Component({
  selector: 'app-user-appointment-history',
  templateUrl: './user-appointment-history.component.html',
  styleUrls: ['./user-appointment-history.component.css']
})
export class UserAppointmentHistoryComponent implements OnInit {
  constructor(private service:ServiceService){

  }
  chooseHeading = 'second';
presentAppointments:any=[];
pastAppointments:any=[];
futureAppointments:any=[];
async ngOnInit(){
  let totalAppointment :any[] =[];
  let myAppointments = await this.service.dataManipulation("GET","getAllAppointments",null);
  let currentUser = await this.service.dataManipulation("GET","getAllCurrentUsers",null);
  currentUser = currentUser[currentUser.length-1];
  myAppointments.forEach((appointment:any) => {
    if(appointment.patientEmail===currentUser.email){
      totalAppointment.push(appointment);
    }
  });
  let previousAppoinments:any[] =[];
  let todayAppoinments:any[] =[];
  let nextAppoinments:any[] =[];
 let  currentDate = getPresentDate();
  totalAppointment.forEach((appointment:any)=>{
  if(appointment.date>currentDate){
    nextAppoinments.push(appointment);
  }
  else   if(appointment.date<currentDate){
    previousAppoinments.push(appointment);
  }
  else  if(appointment.date==currentDate){
    todayAppoinments.push(appointment);
  }
});

this.pastAppointments = previousAppoinments;
this.presentAppointments = todayAppoinments;
this.futureAppointments = nextAppoinments;

}

changeHeading(changeHeadingdata:string){
  
  this.chooseHeading = changeHeadingdata;
}

 
}
