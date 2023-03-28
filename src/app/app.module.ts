import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './header/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { DonationComponent } from './donation/donation.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { RegistrationComponent } from './registration/registration.component';
import { IdprintComponent } from './idprint/idprint.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

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
    RegistrationComponent,
    IdprintComponent,
    FooterComponent,
    EmployeeLoginComponent,
    EmployeeDetailsComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
