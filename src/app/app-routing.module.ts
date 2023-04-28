import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { EpiscrudComponent } from './episcrud/episcrud.component';
import { SecureComponent } from './secure/secure.component';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './admin/home/home.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
  children:[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}

  ]
},  
  {path:'admin', component: AdminComponent,
    children: [
      {path:'home',component:HomeComponent},
    ]},
  {path:'support',component:SupportComponent},
  {path:'episcrud',component:EpiscrudComponent},
  {path:'secure',component:SecureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
