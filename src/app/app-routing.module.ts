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
import { PpeStockComponent } from './admin/ppe-stock/ppe-stock.component';
import { PpeConsultationComponent } from './admin/ppe-consultation/ppe-consultation.component';
import { PpeRequestComponent } from './admin/ppe-request/ppe-request.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserHomeComponent } from './user/user-home/user-home.component';
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
      {path:'home',component:HomeComponent,
      canActivate: [AfterLoginService, AuthGuardService]},
      {path:'ppeStock',component:PpeStockComponent,
      canActivate: [AfterLoginService, AuthGuardService]},
      {path:'ppeConsultation',component: PpeConsultationComponent,
      canActivate: [AfterLoginService, AuthGuardService]},
      {path:'ppeRequest',component: PpeRequestComponent,
      canActivate: [AfterLoginService, AuthGuardService]},
    ]},
  {path:'support',component:SupportComponent,
  canActivate: [AfterLoginService]},
  {path:'episcrud',component:EpiscrudComponent},
  {path:'secure',component:SecureComponent},
  {path:'user',component:UserComponent,
  children: [
    {path:'user-home',component:UserHomeComponent,
  canActivate : [AfterLoginService]}
]},
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
