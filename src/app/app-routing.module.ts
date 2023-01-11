import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyAppointmentComponent } from './my-appointment/my-appointment.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserAppointmentHistoryComponent } from './user-appointment-history/user-appointment-history.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { DoctorsDetailsComponent } from './admin/doctors-details/doctors-details.component';
import { AppointmentListComponent } from './admin/appointment-list/appointment-list.component';
import { EmergencyDetailsComponent } from './admin/emergency-details/emergency-details.component';

const routes: Routes = [
  {path:'myProfile' , component:MyProfileComponent},
  {path:"userAppointmentHistory",component:UserAppointmentHistoryComponent},
  {path:"userDashBoard" ,component:UserDashboardComponent},
  {path:"bookAppointment",component:MyAppointmentComponent},
  {path:"userSignup" , component:UserSignupComponent},
  {path:"userLogin", component:UserLoginComponent},
  {path:"homePage" , component:HomePageComponent},
  {path:"adminSignup",component:AdminSignupComponent},
  {path:"emergency",component:EmergencyComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"adminPortal",component:AdminPortalComponent},
  {path:"doctorList",component:DoctorsDetailsComponent},
  {path:"adminAppointment", component:AppointmentListComponent},
  {path:"emergencyDetails",component:EmergencyDetailsComponent},
  {path:"" ,redirectTo:"/homePage",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
