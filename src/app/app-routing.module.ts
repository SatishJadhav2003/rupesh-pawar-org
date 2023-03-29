import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DonationComponent } from './donation/donation.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { AddUserComponent } from './employee/employee-registration/add-user/add-user.component';
import { EmployeeRegistrationComponent } from './employee/employee-registration/employee-registration.component';
import { HomeComponent } from './home/home.component';
import { IdprintComponent } from './idprint/idprint.component';
import { MediaComponent } from './media/media.component';
import { OurworkComponent } from './ourwork/ourwork.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'media',
    component: MediaComponent,
  },
  {
    path: 'donation',
    component: DonationComponent,
  },
  {
    path: 'login',
    component: EmployeeLoginComponent,
  },
  {
    path: 'idprint',
    component: IdprintComponent,
  },

  {
    path: 'our-work',
    component: OurworkComponent,
  },
  {
    path: 'my-registrations',
    component: EmployeeRegistrationComponent,
  },
  {
    path:'add-members',
    component:AddUserComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
