import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpiscrudComponent } from './episcrud/episcrud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SecureComponent } from './secure/secure.component';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { SupportComponent } from './support/support.component';
import { PpeAddEditComponent } from './ppe-add-edit/ppe-add-edit.component'; 
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ManagerequestComponent } from './managerequest/managerequest.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    EpiscrudComponent,
    SecureComponent,
    SupportComponent,
    PpeAddEditComponent,
    ManagerequestComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AdminModule,
    UserModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }