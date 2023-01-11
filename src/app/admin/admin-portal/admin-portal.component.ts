import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/serviceFolder/service.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit{

  appointmentsCount =0;
  doctorCount = 0;
  emergencyCount = 0;
constructor(private service :ServiceService){

}

async ngOnInit() {
   let  appointments = await this.service.dataManipulation("GET","getAllAppointments",null);
   let  doctors  = await this.service.dataManipulation("GET","getAllDoctors",null);
   let emergency = await this.service.dataManipulation("GET","getAllEmergencyBookings",null);
   this.appointmentsCount = appointments.length;
   this.doctorCount = doctors.length;
   this.emergencyCount = emergency.length;
}


}
