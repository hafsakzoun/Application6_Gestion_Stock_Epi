import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';



@Component({
  selector: 'app-episcrud',
  templateUrl: './episcrud.component.html',
  styleUrls: ['./episcrud.component.scss']
})

export class EpiscrudComponent implements OnInit  {

  EpisArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 //validation
  registerForm!:FormGroup
  submitted=false
  
  label: string ="";
  category: string ="";
  type: string ="";
  size: string="";
  description: string="";
  status: string="";
  quantity: number=0;
 
  currentEpiID = "";

  constructor(private http: HttpClient, private formBuilder:FormBuilder )
  {
    this.getAllEpi();

  }
  
  ngOnInit(): void{
    //validation
      this.registerForm = this.formBuilder.group({
      label:['',Validators.required],
      category:['',Validators.required],
      type:['',Validators.required],
      size:['',Validators.required],
      description:['',Validators.required],

    }) 
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
      this.submitted = true
      if(this.registerForm.invalid)
      {
        return
      }
        console.log(resultData);
        alert("Epi Registered Successfully")
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
  
  setUpdate(data: any)
  {
   this.label = data.label;
   this.category = data.category;
   this.type = data.type;
   this.size = data.size;
   this.description = data.description;
   this.status = data.status;
   this.quantity= data.quantity;
   this.currentEpiID = data.id;
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
        alert("Employee Registered Updateddd")
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
        alert("Epi Deleted")
        this.getAllEpi();
  
    });
 
  }

}
