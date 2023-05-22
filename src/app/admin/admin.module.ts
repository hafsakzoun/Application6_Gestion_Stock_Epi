import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort'
import { ConsultByAreaComponent } from './consult-by-area/consult-by-area.component';
import { ConsultByPostComponent } from './consult-by-post/consult-by-post.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    PpeRequestComponent,
    PpeConsultationComponent,
    PpeStockComponent,
    ConsultByAreaComponent,
    ConsultByPostComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ]
})
export class AdminModule { }