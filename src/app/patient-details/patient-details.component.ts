import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
patients:any=[];

id='';
name='';
address='';
email='';
gender='';
status='';
symptoms='';
result=false;
showNewPatient=false;

ok(){
this.result=!this.result;

}
close(){
  this.result=!this.result;
}
update(patient:any){
this.id=patient.id;
this.name=patient.name;
  this.address=patient.address;
this.email=patient.email;
this.gender=patient.gender;
this.status=patient.status;
this.symptoms=patient.symptoms;
}

addPatient(){
  this.showNewPatient =!this.showNewPatient;
}
cancelPatient(){
  this.showNewPatient =!this.showNewPatient;
}
showNewPatients(){
  this.showNewPatient =!this.showNewPatient;

}

}
