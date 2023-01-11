import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { DoctorsDetailsComponent } from './admin/doctors-details/doctors-details.component';
import { ServiceService } from './serviceFolder/service.service';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { AppointmentListComponent } from './admin/appointment-list/appointment-list.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MyAppointmentComponent } from './my-appointment/my-appointment.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { UserAppointmentHistoryComponent } from './user-appointment-history/user-appointment-history.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { EmergencyDetailsComponent } from './admin/emergency-details/emergency-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    AdminPortalComponent,
    DoctorsDetailsComponent,
    PatientDetailsComponent,
    AppointmentListComponent,
    HomePageComponent,
    EmergencyComponent,
    AdminSignupComponent,
    UserSignupComponent,
    SignUpComponent,
    LoginComponent,
    NavBarComponent,
    UserDashboardComponent,
    UserPanelComponent,
    MyAppointmentComponent,
    MyProfileComponent,
    UserAppointmentHistoryComponent,
    UserLoginComponent,
    AdminLoginComponent,
    EmergencyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
