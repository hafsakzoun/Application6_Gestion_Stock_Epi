import { Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { PpeAddEditComponent } from 'src/app/ppe-add-edit/ppe-add-edit.component';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-ppe-stock',
  templateUrl: './ppe-stock.component.html',
  styleUrls: ['./ppe-stock.component.scss']
})
export class PpeStockComponent implements OnInit{

  EpisArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  currentEpiID = "";

  displayedColumns: string[] = [
    'id',
    'label',
    'category',
    'type',
    'size',
    'description',
    'status',
    'quantity',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, 
    private http: HttpClient,
    private _coreService: CoreService
    ) {

  }

  ngOnInit(): void {
    this.getAllEpi();
  }

  openAddEditPPEForm() {
    const dialogRef = this._dialog.open(PpeAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllEpi();
        }
      },
    });
  }

  getAllEpi()
{
  
  this.http.get("http://127.0.0.1:8000/api/epis")
  .subscribe({
    next: (res) => {
      this.dataSource = new MatTableDataSource(Object.values(res));
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    error: console.log,
  });

 /* .subscribe((resultData: any)=>
  {
      this.isResultLoaded = true;
      console.log(resultData);
      this.EpisArray = resultData;
  });*/
}


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

setDelete(id: number)
{
  this.http.delete("http://127.0.0.1:8000/api/delete"+ "/"+ id).subscribe((resultData: any)=>
  {
      console.log(resultData);
      this._coreService.openSnackBar('Employee deleted!', 'done');
      this.getAllEpi();
  });
}

openEditForm(data: any) {
  const dialogRef = this._dialog.open(PpeAddEditComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getAllEpi();
      }
    },
  });
}

  /*****************************************************/




}
