import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppliancePageComponent } from './add-appliance-page/add-appliance-page.component';
import { AppliancePageComponent } from './appliance-page/appliance-page.component';
import { EditApplianceComponent } from './edit-appliance/edit-appliance.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'Login', component: LoginComponent},
  {path:'Appliance', component: AppliancePageComponent},
  {path:'Signup', component: SignupComponent},
  {path:'AddAppliance', component: AddAppliancePageComponent},
  {path:'EditAppliance', component: EditApplianceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
