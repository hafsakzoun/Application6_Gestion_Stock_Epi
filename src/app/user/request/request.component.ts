import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog} from '@angular/material/dialog';
import { Epi } from 'src/app/services/post.service';
import { RequestFormComponent } from 'src/app/user/request-form/request-form.component';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  epis:any[]= [];
  epi!: Epi;
  constructor(private http: HttpClient, private _dialog: MatDialog, ) { 
  }

  openRequestForm()
  {
    const dialogRef = this._dialog.open(RequestFormComponent);
   
  }
}
