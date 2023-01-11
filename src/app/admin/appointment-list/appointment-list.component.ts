import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/serviceFolder/service.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  constructor(private service:ServiceService){

  }
  result=false;
  appointments:any=[];
  appointmentId ='';
  patientName='';
  patientEmail='';
  appointmentDate='';
  appointmentTime='';
  symptoms='';
  doctorName='';
  status='';
  async ngOnInit() {
      let totalAppoinments = await this.service.dataManipulation("GET","getAllAppointments",null);
      this.appointments = totalAppoinments;
    }

async ok(){
     let myAppoinment:any;
    this.appointments.forEach((element:any) => {
      if(element.appointmentId===this.appointmentId){
        myAppoinment = element;
      }
    });
    myAppoinment.patientName = this.patientName;
    myAppoinment.status = this.status;
    myAppoinment.symptoms = this.symptoms;
    await this.service.dataManipulation("POST","insertAppointment",myAppoinment);
    alert("updated successfully");
this.result=!this.result;
}
close(){
  this.result=!this.result;
}
  async update(appointment:any){
  this.appointmentId =appointment.appointmentId;
  this.patientName=appointment.patientName;
  this.patientEmail=appointment.patientEmail;
  this.appointmentDate=appointment.date;
  this.appointmentTime=appointment.time;
  this.symptoms=appointment.symptoms;
  this.doctorName=appointment.doctorName;
  this.status=appointment.status;
 
    this.result=!this.result;

  }
}

