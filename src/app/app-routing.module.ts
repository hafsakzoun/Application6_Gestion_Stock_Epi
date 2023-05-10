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
const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
  children:[
    {path:'',component:RoleComponent},
    //{path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent,
  canActivate : [BeforeLoginService]}
  ]
},  
  {path:'admin', component: AdminComponent,
    children: [
      {path:'home',component:HomeComponent},
      {path:'ppeStock',component:PpeStockComponent},
      {path:'ppeConsultation',component: PpeConsultationComponent},
      {path:'ppeRequest',component: PpeRequestComponent},
    ]},
  {path:'support',component:SupportComponent},
  {path:'LoginAdmin',component:LoginadminComponent},
  {path:'episcrud',component:EpiscrudComponent},
  {path:'secure',component:SecureComponent},
  {path:'user',component:UserComponent,
  canActivate : [AfterLoginService]},
  {path:'login',
  component:LoginComponent,
 // canActivate : [BeforeLoginService]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
