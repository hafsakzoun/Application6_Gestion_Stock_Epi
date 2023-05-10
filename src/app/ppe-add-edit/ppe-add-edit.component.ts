import { Component,OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';


@Component({
  selector: 'app-ppe-add-edit',
  templateUrl: './ppe-add-edit.component.html',
  styleUrls: ['./ppe-add-edit.component.scss']
})
export class PpeAddEditComponent  implements OnInit {
 
  ppeForm: FormGroup;

  EpisArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false 

  //ppeForm: FormGroup;

  label: string ="";
  category: string ="";
  type: string ="";
  size: string="";
  description: string="";
  status: string="";
  quantity: number=0;

  currentEpiID = "";
  getAllEpi()
  {
    
    this.http.get("http://127.0.0.1:8000/api/epis")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.EpisArray = resultData;
    });
  }

  constructor(private http: HttpClient,private _fb: FormBuilder,   
     @Inject(MAT_DIALOG_DATA) public data: any,
     private _dialogRef: MatDialogRef<PpeAddEditComponent>,
     private _coreService: CoreService

    )
  {
    this.getAllEpi();
    this. ppeForm = this._fb.group({
      label: '',
      category: '',
      type: '',
      size: '',
      description:'',
      status: '',
      quantity: '',     
    });
  }
 
  ngOnInit(): void {
    this.ppeForm.patchValue(this.data);
  }
 
  onFormSubmit() {
    if (this.ppeForm.valid) {
      if (this.data) {
       this.http.put
          ("http://127.0.0.1:8000/api/update"+ "/"+this.data.id,this.ppeForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
       this.http.post("http://127.0.0.1:8000/api/save",this.ppeForm.value)
        .subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}

