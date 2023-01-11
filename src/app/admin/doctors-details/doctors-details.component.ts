import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/serviceFolder/service.service';

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.css']
})
export class DoctorsDetailsComponent implements OnInit{
  result=false;
  doctorId ='';
  doctorName='';
  doctorEmail='';
  doctorAddress='';
  doctorFee='';
  doctorSpecialization='';
  doctorMobile='';
  doctorPassword="";
  showNewDoctor=false;
  doctors:any=[]

  constructor(private service:ServiceService){

  }

  async ngOnInit() {
      this.doctors = await this.service.dataManipulation("GET","getAllDoctors",null);
  }


showNewDoctors(){
  this.showNewDoctor=!this.showNewDoctor;
}
async addDoctor(){
if( this.doctorName==''||
this.doctorEmail=='' ||
this.doctorAddress=='' ||
this.doctorFee==''||
this.doctorSpecialization==''||
this.doctorPassword==""||
this.doctorMobile==''){
  alert('fields cannot be empty');
  return;
}
let doctorObject = {

  doctorId:this.doctorId,
   doctorEmail:this.doctorEmail,
	 doctorName:this.doctorName,
	 doctorMobile:this.doctorMobile,
	 doctorSpecialization:this.doctorSpecialization,
	 doctorFee:this.doctorFee,
   doctorAddress:this.doctorAddress,
   doctorTimings:["0","0","0","0","0"],
   password:this.doctorPassword
}
let doctorDetails = await this.service.dataManipulation("GET","getAllDoctors",null);
if(doctorDetails.length==0){
  await this.service.dataManipulation("POST","insertDoctor",doctorObject);
  alert("doctor added succesfully");
  this.showNewDoctor=!this.showNewDoctor;
  return;
}
let doctorData='';
doctorData= doctorDetails.filter((doctor:any)=>doctor.doctorEmail===this.doctorEmail);
    if(doctorData==''){
      await this.service.dataManipulation("POST","insertDoctor",doctorObject);
      alert("doctor added succesfully");
      this.showNewDoctor=!this.showNewDoctor;
    }
    else{
      alert("already exist");
    }
}
cancelDoctor(){
  this.showNewDoctor=!this.showNewDoctor;
}

async ok(){
  let doctorDetails = await this.service.dataManipulation("GET","getAllDoctors",null);
  let updateDoctor:any;
   doctorDetails.forEach((element:any) => {
    if(element.doctorId===this.doctorId){
      updateDoctor = element;
    }
  }); 

  updateDoctor.doctorFee = this.doctorFee;
  updateDoctor.doctorName = this.doctorName;
  updateDoctor.doctorAddress =this.doctorAddress;
  updateDoctor.doctorSpecialization = this.doctorSpecialization;
  updateDoctor.doctorMobile = this.doctorMobile;
  await this.service.dataManipulation("POST","insertDoctor",updateDoctor) 
  alert("updated succesfully");
this.result= !this.result;
}
close(){
  this.result= !this.result;
  this.doctorId ='';
  this.doctorName='';
  this.doctorEmail='';
  this.doctorAddress='';
  this.doctorFee='';
  this.doctorSpecialization='';
  this.doctorMobile='';
  this.doctorPassword="";
}
updateDoctor(doctor:any){
  this.doctorId = doctor.doctorId;
  this.doctorName=doctor.doctorName;
  this.doctorEmail=doctor.doctorEmail;
  this.doctorAddress=doctor.doctorAddress;
  this.doctorFee=doctor.doctorFee;
  this.doctorSpecialization=doctor.doctorSpecialization;
  this.doctorMobile=doctor.doctorMobile;
  this.result = !this.result;
}
}
