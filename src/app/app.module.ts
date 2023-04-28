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

@NgModule({
  declarations: [
    AppComponent,
    EpiscrudComponent,
    SecureComponent,
    SupportComponent,
   
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
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }