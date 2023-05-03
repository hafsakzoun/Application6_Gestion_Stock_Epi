import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { PpeAddEditComponent } from 'src/app/ppe-add-edit/ppe-add-edit.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ppe-stock',
  templateUrl: './ppe-stock.component.html',
  styleUrls: ['./ppe-stock.component.scss']
})
export class PpeStockComponent {

  EpisArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  label: string ="";
  category: string ="";
  type: string ="";
  size: string="";
  description: string="";
  status: string="";
  quantity: number= 0;
 
  currentEpiID = "";

  constructor(private _dialog: MatDialog, private http: HttpClient) {

    this.getAllEpi();
  }
  openAddEditPPEForm()
{
 this._dialog.open(PpeAddEditComponent);
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
