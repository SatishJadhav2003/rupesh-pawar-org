import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './header/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { DonationComponent } from './donation/donation.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { IdprintComponent } from './idprint/idprint.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { EmployeeRegistrationComponent } from './employee/employee-registration/employee-registration.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './employee/employee-registration/user-list/user-list.component';
import { AddUserComponent } from './employee/employee-registration/add-user/add-user.component';
import { ViewUserComponent } from './employee/employee-registration/view-user/view-user.component';
import { EmpSignupComponent } from './employee/emp-signup/emp-signup.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MediaComponent,
    DonationComponent,
    OurworkComponent,
    IdprintComponent,
    FooterComponent,
    EmployeeLoginComponent,
    EmployeeDetailsComponent,
    AdminLoginComponent,
    EmployeeRegistrationComponent,
    AddUserComponent,
    UserListComponent,
    ViewUserComponent,
    EmpSignupComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide:LocationStrategy,useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
