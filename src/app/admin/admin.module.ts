import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { PpeRequestComponent } from './ppe-request/ppe-request.component';
import { PpeConsultationComponent } from './ppe-consultation/ppe-consultation.component';
import { PpeStockComponent } from './ppe-stock/ppe-stock.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    PpeRequestComponent,
    PpeConsultationComponent,
    PpeStockComponent,
   
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableDataSource 
  ]
})
export class AdminModule { }