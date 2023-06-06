import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
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
import { RoleComponent } from './public/role/role.component';
import { LoginadminComponent } from './public/loginadmin/loginadmin.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ConsultationUserComponent } from './user/consultation-user/consultation-user.component';
import { ConsultByAreaComponent } from './admin/consult-by-area/consult-by-area.component';
import { ConsultByPostComponent } from './admin/consult-by-post/consult-by-post.component';
import { ConsultUserPostComponent } from './user/consult-user-post/consult-user-post.component';
import { ConsultUserAreaComponent } from './user/consult-user-area/consult-user-area.component';
import { RequestComponent } from './user/request/request.component';
import { GuardService } from './services/guard.service';
const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
  children:[
    {path:'',component:RoleComponent,
    canActivate : [BeforeLoginService]},
    {path:'signup',component:SignupComponent,
  canActivate : [BeforeLoginService]
 } ]
},  
  {path:'admin', component: AdminComponent,
    children: [
      {path:'home',component:HomeComponent,
       //canActivate: [GuardService]
      },
      {path:'ppeStock',component:PpeStockComponent,
       //canActivate: [GuardService]
      },
      {path:'ppeConsultation',component: PpeConsultationComponent,
       canActivate: [GuardService]},
      {path:'ppeRequest',component: PpeRequestComponent,
      //canActivate: [GuardService]
    },
      {path:'consult-by-area',component:ConsultByAreaComponent,
      canActivate: [GuardService]},
      {path:'consult-by-post',component:ConsultByPostComponent,
      canActivate: [GuardService]},
      

    ]},
  {path:'support',component:SupportComponent},
  {path:'LoginAdmin',component:LoginadminComponent,
  canActivate : [BeforeLoginService]},
  {path:'secure',component:SecureComponent},
  {path:'user',component:UserComponent,
  canActivate : [AfterLoginService],
  children: [
    {path:'userhome',component:UserhomeComponent,
    canActivate : [AfterLoginService]},
    {path:'userconsult',component:ConsultationUserComponent,
    canActivate : [AfterLoginService]},
    {path:'userconsultByPost',component:ConsultUserPostComponent,
    canActivate : [AfterLoginService]},
    {path:'userconsultByArea',component:ConsultUserAreaComponent,
    canActivate : [AfterLoginService]}
  ]
  },
  {path:'user',component:UserComponent,children: [
    {path:'ConsultationUser',component:ConsultationUserComponent,
    canActivate : [AfterLoginService]},
    {path:'PPERequest',component:RequestComponent,
    canActivate : [AfterLoginService]}

  ]
  ,canActivate : [AfterLoginService]
},
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
