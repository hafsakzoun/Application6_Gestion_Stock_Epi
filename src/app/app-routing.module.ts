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
import { RoleComponent } from './public/role/role.component';
import { LoginadminComponent } from './public/loginadmin/loginadmin.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ConsultationUserComponent } from './user/consultation-user/consultation-user.component';
import { ConsultByAreaComponent } from './admin/consult-by-area/consult-by-area.component';
import { ConsultByPostComponent } from './admin/consult-by-post/consult-by-post.component';
import { ConsultUserPostComponent } from './user/consult-user-post/consult-user-post.component';
import { ConsultUserAreaComponent } from './user/consult-user-area/consult-user-area.component';
import { RequestComponent } from './user/request/request.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
  children:[
    {path:'',component:RoleComponent},
    //{path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent,
  //canActivate : [BeforeLoginService]
 } ]
},  
  {path:'admin', component: AdminComponent,
    children: [
      {path:'home',component:HomeComponent},
      {path:'ppeStock',component:PpeStockComponent},
      {path:'ppeConsultation',component: PpeConsultationComponent},
      {path:'ppeRequest',component: PpeRequestComponent},
      {path:'consult-by-area',component:ConsultByAreaComponent},
      {path:'consult-by-post',component:ConsultByPostComponent},
      

    ]},
  {path:'support',component:SupportComponent},
  {path:'LoginAdmin',component:LoginadminComponent},
  {path:'episcrud',component:EpiscrudComponent},
  {path:'secure',component:SecureComponent},
  {path:'user',component:UserComponent,
  canActivate : [AfterLoginService],
  children: [
    {path:'userhome',component:UserhomeComponent},
    {path:'userconsult',component:ConsultationUserComponent},
    {path:'userconsultByPost',component:ConsultUserPostComponent},
    {path:'userconsultByArea',component:ConsultUserAreaComponent}
  ]
  },
  {path:'user',component:UserComponent,children: [
    {path:'ConsultationUser',component:ConsultationUserComponent},
    {path:'PPERequest',component:RequestComponent}

  ]
  //,canActivate : [AfterLoginService]
},
  {path:'login',
  component:LoginComponent
  //,canActivate : [BeforeLoginService]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
