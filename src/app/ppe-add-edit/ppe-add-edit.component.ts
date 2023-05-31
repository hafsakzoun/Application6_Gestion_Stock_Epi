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
 
  constructor(
    private http: HttpClient,
    private _fb: FormBuilder,   
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<PpeAddEditComponent>,
    private _coreService: CoreService

  )
  {
    this. ppeForm = this._fb.group({
      label: '',
      size: '',
      description:'',
      status: '',
      quantity: '', 
      image:''    
    });
  }
 
  ngOnInit(): void {
    this.ppeForm.patchValue(this.data);
  }
  imageData: string | ArrayBuffer | null = null;

  onImageUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageData = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  
 
  onFormSubmit() {
    if (this.ppeForm.valid) {
      if (this.data) {
       this.http.put
          ("http://127.0.0.1:8000/api/update"+ "/"+this.data.id,this.ppeForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('PPE detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
       this.http.post("http://127.0.0.1:8000/api/save",this.ppeForm.value)
        .subscribe({
          next: (_val: any) => {
            this._coreService.openSnackBar('PPE added successfully');
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

