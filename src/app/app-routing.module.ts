import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [

  {path:'home',component:HomepageComponent},
  {path:'profile',component:ProfileComponent},
  {path:'register',component:UserRegistrationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
