import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ppe-add-edit',
  templateUrl: './ppe-add-edit.component.html',
  styleUrls: ['./ppe-add-edit.component.scss']
})
export class PpeAddEditComponent {
  ppeForm: FormGroup;

  label: string ="";
  category: string ="";
  type: string ="";
  size: string="";
  description: string="";
  status: string="";
  quantity: number=0;

  constructor(private _fb:FormBuilder){
    this.ppeForm = _fb.group({
      label:'',
      category:'',
      type:'',
      size:'',
      description:'',
      status:'',
      quantity:''

    })
  }
  onFormSubmit(){
    if (this.ppeForm.valid){
      console.log(this.ppeForm.value);
    }
  }
}

