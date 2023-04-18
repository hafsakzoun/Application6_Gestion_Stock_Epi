import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { EpiscrudComponent } from './episcrud/episcrud.component';
import { SecureComponent } from './secure/secure.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent}

  ]
},
  {path:'episcrud',component:EpiscrudComponent},
  {path:'secure',component:SecureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
