import { Component, Inject ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  RequestForm: FormGroup;

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

  epis: any[] = [];
  cost_centres: any[] = [];
  size: string[] = [];
  selectedEpiSizes: string[] = [];
  ppeForms: FormGroup[] = [];

  constructor(
    private http: HttpClient,
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<RequestFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.RequestForm = this._fb.group({
      cost_centre: '',
      name: '',
      TEID: '',
      Department: '',
      PPE: '',
      size: '',
      Quantity: '',
    });
  }
  removePPEForm(index: number) {
    this.ppeForms.splice(index, 1);
  }
  // Method to retrieve EPIs from the server
  getEpis() {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/LabelSizes');
  }
  // Method to retrieve cost centers from the server
  getCostCenters() {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/CostCenter');
  }
  // Get the keys of the 'epis' object
  episKeys(){
    return Object.keys(this.epis);
  }
  isAnyEpiNull(): boolean {
    const selectedEpi = this.RequestForm.controls['PPE'].value;
    return selectedEpi && this.epis[selectedEpi]?.some((epi: null) => epi !== null);
  }
  ngOnInit() {
    // Retrieve EPIs from the server and assign the response to the 'epis' array
    this.getEpis().subscribe(response => {
      this.epis = response;
      console.log(this.epis);
    });
    // Retrieve cost centers from the server and assign the response to the 'cost_centres' array
    this.getCostCenters().subscribe(data => {
      this.cost_centres = data;
    });
  }

}
