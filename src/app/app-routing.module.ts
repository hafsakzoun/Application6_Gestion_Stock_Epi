import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { EpiscrudComponent } from './episcrud/episcrud.component';
import { SecureComponent } from './secure/secure.component';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './admin/home/home.component';
import { UserComponent } from './user/user.component';
import { SupportComponent } from './support/support.component';
import {AfterLoginService} from './services/after-login.service';
import {BeforeLoginService} from './services/before-login.service';
const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
  children:[
    {path:'',component:LoginComponent},
    //{path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent,
  canActivate : [BeforeLoginService]}
  ]
},  
  {path:'admin', component: AdminComponent,
    children: [
      {path:'home',component:HomeComponent},
    ]},
  {path:'support',component:SupportComponent},
  {path:'episcrud',component:EpiscrudComponent},
  {path:'secure',component:SecureComponent},
  {path:'user',component:UserComponent,
  canActivate : [AfterLoginService]},
  {path:'login',
  component:LoginComponent,
  canActivate : [BeforeLoginService]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
