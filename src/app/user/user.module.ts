import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router'; 
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { UserConsultationComponent } from './user-consultation/user-consultation.component';

@NgModule({
  declarations: [
    UserComponent,
    UserHomeComponent,
    RequestFormComponent,
    UserConsultationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
  ]
})
export class UserModule { }
