import { Component, Inject ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { EmailService } from 'src/app/services/email.service';


@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  RequestForm: FormGroup;

  epis: any[] = [];
  cost_centre: any[] = [];
  size: string[] = [];
  selectedEpiSizes: string[] = [];
  ppeForms: FormGroup[] = [];

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
    'Maintenance',
    'Production',
    'Warehouse',
    'Supply Chain',
  ];

  

  constructor(
    private http: HttpClient,
    private _fb: FormBuilder,
    private emailService: EmailService,
    private _dialogRef: MatDialogRef<RequestFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.RequestForm = this._fb.group({
      cost_centre: '',
      name: '',
      TEID: '',
      Department: '',
      ppe_label: '',
      ppe_size: '',
      RequestedQt: '',
    });
  }

  ngOnInit() {

    this.RequestForm.patchValue(this.data);
    // Retrieve EPIs from the server and assign the response to the 'epis' array
    this.getEpis().subscribe(response => {
      this.epis = response;
      console.log(this.epis);
    });
    // Retrieve cost centers from the server and assign the response to the 'cost_centres' array
    this.getCostCenters().subscribe(data => {
      this.cost_centre = data;
    });

  }
  onFormSubmit() {
    if (this.RequestForm.valid)  {
      this.http.post("http://127.0.0.1:8000/api/Requests/save", this.RequestForm.value).subscribe({
         next: (_val: any) => {
           this._coreService.openSnackBar('Request sent successfully');
           this._dialogRef.close(true);
         },
         error: (err: any) => {
           console.error(err);
         },
       });
     }
  }

  /*
  removePPEForm(index: number) {
    this.ppeForms.splice(index, 1);
  }*/

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
    const selectedEpi = this.RequestForm.controls['ppe_label'].value;
    return selectedEpi && this.epis[selectedEpi]?.some((epi: null) => epi !== null);
  }
 

}
