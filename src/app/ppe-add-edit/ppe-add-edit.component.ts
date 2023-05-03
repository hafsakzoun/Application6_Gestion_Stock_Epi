import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ppe-add-edit',
  templateUrl: './ppe-add-edit.component.html',
  styleUrls: ['./ppe-add-edit.component.scss']
})
export class PpeAddEditComponent  {
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

  constructor(private http: HttpClient)
  {
    this.getAllEpi();
  }
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
  register()
  {
    let bodyData={
      'label': this.label,
      'category': this.category,
      'type': this.type,
      'size': this.size,
      'description': this.description,
      'status': this.status,
      'quantity': this.quantity,
    };
   
    this.http.post("http://127.0.0.1:8000/api/save",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("PPE Registered Successfully")
        this.getAllEpi();
        this.label = '';
        this.category = '';
        this.type= '';
        this.size='';
        this.description='';
        this.status='';
        this.quantity=0;
    });
  }

  UpdateRecords()
  {
    let bodyData = {
      "label" : this.label,
      "category" : this.category,
      "type" : this.type,
      "size" : this.size,
      "description" :this.description,
      "status" : this.status,
      "quantity" : this.quantity,
    };

    this.http.put("http://127.0.0.1:8000/api/update"+ "/"+ this.currentEpiID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("PPE Registered Updated ")
        this.getAllEpi();
        this.label = '';
        this.category = '';
        this.type='';
        this.size='';
        this.description='';
        this.status='';
        this.quantity  = 0;
    });
  }

  save()
  {
    if(this.currentEpiID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
  setDelete(data: any)
  {
    
    
    this.http.delete("http://127.0.0.1:8000/api/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("PPE Deleted")
        this.getAllEpi();
  
    });
 
  }
 
}

