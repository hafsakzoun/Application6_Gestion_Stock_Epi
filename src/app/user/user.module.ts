import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router'; 
import { UserComponent } from './user.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ConsultationUserComponent } from './consultation-user/consultation-user.component';
@NgModule({
  declarations: [
    UserComponent,
    UserhomeComponent,
    ConsultationUserComponent
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
