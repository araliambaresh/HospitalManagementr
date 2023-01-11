import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../serviceFolder/service.service';
import { getPresentDate, getPresentTime } from '../dataFormat';

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.component.html',
  styleUrls: ['./my-appointment.component.css']
})
export class MyAppointmentComponent implements OnInit {

  constructor(private servie:ServiceService){
    // let time = new Date().toLocaleTimeString();
    // let q = new Date();
    // let currentDate = q.getFullYear()+"-"+(q.getMonth()+1)+"-"+q.getDate()
 
  }
  
  symptoms ='';
  doctorName='';
  doctorFee = '';
  time='';
  date = '';
  doctors:any =[];
  doctor:any={};
  doctorAvailabilty=false;
  doctorSpecialization ='';
    chooseBookingTimingColor1=false;
    chooseBookingTimingColor2=false;
    chooseBookingTimingColor3=false;
    chooseBookingTimingColor4=false;
    chooseBookingTimingColor5=false;
    chooseBookingTiming1=false;
    chooseBookingTiming2=false;
    chooseBookingTiming3=false;
    chooseBookingTiming4=false;
    chooseBookingTiming5=false;

  async ngOnInit() {
    console.log(this.doctorSpecialization);
    this.doctors = await this.servie.dataManipulation("GET","getAllDoctors",null);
    
  }
 
  // its a function mainly applied to select tag to get the value of select-option
  async change(data:any){
    this.chooseBookingTiming1=false;
    this.chooseBookingTiming2=false;
    this.chooseBookingTiming3=false;
    this.chooseBookingTiming4=false;
    this.chooseBookingTiming5=false;
// for coloring the time schedule list
    this.chooseBookingTimingColor1=false;
    this.chooseBookingTimingColor2=false;
    this.chooseBookingTimingColor3=false;
    this.chooseBookingTimingColor4=false;
    this.chooseBookingTimingColor5=false;
    for(let doc of this.doctors){
      console.log(doc.doctorSpecialization===data.value);
      if(doc.doctorSpecialization===data.value){
        this.doctor = doc;
      }
    }
    
  }
  // to filter the availibilty of doctors timings
  async checkAvailability(){ 
    this.chooseBookingTiming1=false;
    this.chooseBookingTiming2=false;
    this.chooseBookingTiming3=false;
    this.chooseBookingTiming4=false;
    this.chooseBookingTiming5=false;
// for coloring the time schedule list
    this.chooseBookingTimingColor1=false;
    this.chooseBookingTimingColor2=false;
    this.chooseBookingTimingColor3=false;
    this.chooseBookingTimingColor4=false;
    this.chooseBookingTimingColor5=false;
    // for comparing dates
    let currentDate = getPresentDate();
   

    this.doctorAvailabilty = !this.doctorAvailabilty;
    if(this.doctorAvailabilty===true && this.doctorName!==''){
       // if entered date is less than present date
       console.log(this.date<currentDate.toString(),this.date,currentDate);
    if(this.date<currentDate.toString()){
      this.chooseBookingTiming1=true;
      this.chooseBookingTiming2=true;
      this.chooseBookingTiming3=true;
      this.chooseBookingTiming4=true;
      this.chooseBookingTiming5=true;
      return ;
    }
    let doctorBookingRecords = await this.servie.dataManipulation("GET","getAllBookingRecords",null);
    let bookingRecord:any;
    doctorBookingRecords.forEach((record:any)=>{
      if(record.bookingDate===this.date && record.doctorName===this.doctorName && this.date>=currentDate.toString()){
        bookingRecord = record;
      }
    })

    let time = getPresentTime();
   

   // if there is a record 
           if(bookingRecord!==undefined && this.date===currentDate.toString() ){
          

          if(bookingRecord.bookingTime[0]==="1" || time>"10:30:00"){
            this.chooseBookingTiming1=true;
          }
             if(bookingRecord.bookingTime[1]==="1" || time>"11:30:00"){
            this.chooseBookingTiming2=true;
          }
             if(bookingRecord.bookingTime[2]==="1" || time>"12:30:00"){
            this.chooseBookingTiming3=true;
          }
             if(bookingRecord.bookingTime[3]==="1" || time>"14:30:00"){
            this.chooseBookingTiming4=true;
          }
           if(bookingRecord.bookingTime[4]==="1" || time>"15:30:00"){
            this.chooseBookingTiming5=true;
          }

          return;
      

    }
    // if there is no record
    
    else if(bookingRecord==undefined && this.date===currentDate.toString()){
      if(time>"10:30:00"){
        console.log("inside the current date",time>"10:30:00",time,"10:30:00");
        this.chooseBookingTiming1=true;
      }
         if( time>"11:30:00"){
        this.chooseBookingTiming2=true;
      }
         if( time>"12:30:00"){
        this.chooseBookingTiming3=true;
      }
         if( time>"14:30:00"){
        this.chooseBookingTiming4=true;
      }
       if( time>"15:30:00"){
        this.chooseBookingTiming5=true;
      }

      return;
    }

    // if record found in database
      
      if(bookingRecord!==undefined){
        console.log(bookingRecord.bookingTime);
    if(bookingRecord.bookingTime[0]==="1" ){
      this.chooseBookingTiming1=true;
    }
       if(bookingRecord.bookingTime[1]==="1" ){
      this.chooseBookingTiming2=true;
    }
       if(bookingRecord.bookingTime[2]==="1" ){
      this.chooseBookingTiming3=true;
    }
       if(bookingRecord.bookingTime[3]==="1" ){
      this.chooseBookingTiming4=true;
    }
     if(bookingRecord.bookingTime[4]==="1" ){
      this.chooseBookingTiming5=true;
    }
  }
  }



  }

  chooseBookingTime(bookingTime:any,choice:any){
    if(choice==='value1'){
      if(this.chooseBookingTimingColor3==false &&this.chooseBookingTimingColor2==false &&
        this.chooseBookingTimingColor5==false && this.chooseBookingTimingColor4==false){
          this.chooseBookingTimingColor1 = !this.chooseBookingTimingColor1;
          if(this.time==='')
          this.time=bookingTime;
          else
          this.time='';
        }

    }
    else if(choice==='value2'){
      console.log("inside value2")
      if(this.chooseBookingTimingColor1==false &&this.chooseBookingTimingColor3==false &&
        this.chooseBookingTimingColor5==false && this.chooseBookingTimingColor4==false){
          console.log("innside value 2 if ")
          this.chooseBookingTimingColor2 = !this.chooseBookingTimingColor2;
          if(this.time==='')
          this.time=bookingTime;
          else
          this.time='';
        }
    }
    else if(choice==='value3'){
      if(this.chooseBookingTimingColor1==false &&this.chooseBookingTimingColor2==false &&
        this.chooseBookingTimingColor5==false && this.chooseBookingTimingColor4==false){
          this.chooseBookingTimingColor3 = !this.chooseBookingTimingColor3;
          if(this.time==='')
          this.time=bookingTime;
          else
          this.time='';
        }
    }
    else if(choice==='value4'){
      if(this.chooseBookingTimingColor1==false &&this.chooseBookingTimingColor2==false &&
        this.chooseBookingTimingColor5==false && this.chooseBookingTimingColor3==false){
          if(this.time==='')
          this.time=bookingTime;
          else
          this.time='';
          this.chooseBookingTimingColor4 = !this.chooseBookingTimingColor4;
        }
    }
    else if(choice==='value5'){
      if(this.chooseBookingTimingColor1==false &&this.chooseBookingTimingColor2==false &&
        this.chooseBookingTimingColor3==false && this.chooseBookingTimingColor4==false){
          if(this.time==='')
          this.time=bookingTime;
          else
          this.time='';
          this.chooseBookingTimingColor5 = !this.chooseBookingTimingColor5;
        }
    }


  }
  async bookAppointment(){

    let q = new Date();
    let getYear = q.getFullYear().toString();
    let getDate = q.getDate().toString();
    let getMonth = (q.getMonth()+1).toString();
    if(q.getDate()<10){
      getDate = '0'+getDate;
    }
    if((q.getMonth()+1)<10){
      getMonth = '0'+getMonth;
    }
    let currentDate = getYear+"-"+getMonth+"-"+getDate;

    if( this.time=='' || this.date==''  || this.symptoms==''){
      alert("fields cannot be empty");
    
    }
    else if( this.date<currentDate.toString()){
      alert("invalid date");
    }
    else{
      // for getting currentUser details 
      let currentUser = await this.servie.dataManipulation("GET","getAllCurrentUsers",null);
      let allUsers = await this.servie.dataManipulation("GET","getAllUsers",null);
      currentUser = currentUser[currentUser.length-1];
        let user:any;
        allUsers.forEach((element:any) => {
          if(element.email===currentUser.email){
            user =element;
            
          }
          
        });
        let doctorBookingRecords = await this.servie.dataManipulation("GET","getAllBookingRecords",null);
        if(doctorBookingRecords.length==0){
          let schedule =['0','0','0','0','0'];
          if(this.time=='10:30AM')
          schedule[0]='1';
          else if(this.time=='11:30AM')
          schedule[1]='1';
          else if(this.time=='12:30PM')
          schedule[2]='1';
          else if(this.time=='2:30PM')
          schedule[3]='1';
          else if(this.time=='3:30PM')
          schedule[4]='1';

          let bookingRecord ={
             bookingDate:this.date,
	            doctorId:this.doctor.doctorId,
	           bookingTime:schedule,
              doctorName:this.doctor.doctorName
          };
          await this.servie.dataManipulation("POST","insertDoctorBookingRecord",bookingRecord)
        }
        else{
          let bookRecord:any;
          doctorBookingRecords.forEach((record:any)=>{
            if(record.bookingDate===this.date && this.doctorName==record.doctorName){
              bookRecord = record;
            }

          });
          if(bookRecord!==undefined){
            let schedule = bookRecord.bookingTime; 
            if(this.time=='10:30AM')
            schedule[0]='1';
            else if(this.time=='11:30AM')
            schedule[1]='1';
            else if(this.time=='12:30PM')
            schedule[2]='1';
            else if(this.time=='2:30PM')
            schedule[3]='1';
            else if(this.time=='3:30PM')
            schedule[4]='1';
            bookRecord.bookingTime = schedule;
            await this.servie.dataManipulation("POST","insertDoctorBookingRecord",bookRecord)
          }
          else{
            let schedule =['0','0','0','0','0'];
          if(this.time=='10:30AM')
          schedule[0]='1';
          else if(this.time=='11:30AM')
          schedule[1]='1';
          else if(this.time=='12:30PM')
          schedule[2]='1';
          else if(this.time=='2:30PM')
          schedule[3]='1';
          else if(this.time=='3:30PM')
          schedule[4]='1';

          let bookingRecord ={
             bookingDate:this.date,
	            doctorId:this.doctor.doctorId,
	           bookingTime:schedule,
              doctorName:this.doctor.doctorName
          };
          await this.servie.dataManipulation("POST","insertDoctorBookingRecord",bookingRecord)
          }

          
          
        }
        
        //appointTable records 

        let appointments = {
            patientName: user.name,
          gender:user.gender,
            patientEmail:user.email,
          patientMobileNumber:user.mobileNumber,
          doctorName:this.doctor.doctorName,
           doctorSpecialization:this.doctorSpecialization,
              doctorFee:this.doctorFee,
              symptoms:this.symptoms,
                date:this.date,
              time:this.time,
              status:"pending"
        };
        await this.servie.dataManipulation("POST","insertAppointment",appointments)
        this.symptoms ='';
        this.doctorName='';
        this.doctorFee = '';
        this.time='';
        this.date = '';
        alert("appointment successfull")
          this.doctorAvailabilty=false;
          this.doctorSpecialization ='hello';
          this.chooseBookingTimingColor1=false;
          this.chooseBookingTimingColor2=false;
          this.chooseBookingTimingColor3=false;
          this.chooseBookingTimingColor4=false;
          this.chooseBookingTimingColor5=false;
      


      }
  }
}
