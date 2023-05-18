import { Component,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent {

  RequestForm: FormGroup;
  
  SAP: number[] = [
    1245,
    1319,
    1548,
  ];

  Department: string[] = [
    'IT',
    'Business',
    'HR',
    'Quality',
    'Process',
    'GFS',
    'HSE',
    'HR',
    'Medical center',
    'maintenance',
    'Production',
    'Warehouse',
    'Supply Chain',
  ];

  epis:any[]= [];

  size: string[] = [
    's',
    'M',
    'L',
    'XL'
  ]
  constructor(
    private http: HttpClient,
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<RequestFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.RequestForm = this._fb.group({
      SAP: '',
      name: '',
      TEID: '',
      Departement: '',
      PPE: '',
      size: '',
      Quantity: '',
      
    });
  }
  getEpis(){
    return this.http.get<any[]>('http://127.0.0.1:8000/api/epis');
  }
 
  ngOnInit() {
    this.getEpis().subscribe(data => {
      this.epis = data;
    });
  }
  
}
