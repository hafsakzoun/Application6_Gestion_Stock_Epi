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
import { ConsultUserPostComponent } from './consult-user-post/consult-user-post.component';
import { ConsultUserAreaComponent } from './consult-user-area/consult-user-area.component';
import { RequestComponent } from './request/request.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { RequestFormComponent } from './request-form/request-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    UserComponent,
    UserhomeComponent,
    ConsultationUserComponent,
    ConsultUserPostComponent,
    ConsultUserAreaComponent,
    RequestComponent,
    RequestFormComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule
   
  ]
})
export class UserModule { }
