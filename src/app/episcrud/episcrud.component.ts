import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episcrud',
  templateUrl: './episcrud.component.html',
  styleUrls: ['./episcrud.component.scss']
})
export class EpiscrudComponent implements OnInit  {

  EmployeeArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  
  label: string ="";
  category: string ="";
  type: string ="";
  size: string="";
  description: string="";
  status: string="";
  quantity: number=0;
 
  currentEpiID = "";
  constructor(private http: HttpClient )
  {


  }
  ngOnInit(): void{

  }
 

}
