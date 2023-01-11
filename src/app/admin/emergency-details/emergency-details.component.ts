import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/serviceFolder/service.service';

@Component({
  selector: 'app-emergency-details',
  templateUrl: './emergency-details.component.html',
  styleUrls: ['./emergency-details.component.css']
})
export class EmergencyDetailsComponent implements OnInit {
  emergencies :any[] = [];
  constructor(private service:ServiceService){

  }

  async ngOnInit() {
    this.emergencies = await this.service.dataManipulation("GET","getAllEmergencyBookings",null);
      
  }

}
