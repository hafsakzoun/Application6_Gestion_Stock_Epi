import { Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-ppe-request',
  templateUrl: './ppe-request.component.html',
  styleUrls: ['./ppe-request.component.scss']
})
export class PpeRequestComponent  implements OnInit{
  epis:any[]= [];
  

  displayedColumns: string[] = [
    'id',
    'cost_centre',
    'name',
    'TEID',
    'Department',
    'ppe_label',
    'ppe_size',
    'RequestedQt',

    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient, 
    private _dialog: MatDialog,
    private _coreService: CoreService ) {}
    ngOnInit(): void {
      this.getRequests();
    }
    getRequests() {
      this.http.get("http://127.0.0.1:8000/api/Requests/Approved").subscribe({
        next: (res: any) => {
          const formattedData = res.map((item: any) => ({
            ...item,
          }));
          this.dataSource = new MatTableDataSource(formattedData);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,
      });
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    approveRequest(id: number) {
      this.http.post("http://127.0.0.1:8000/api/Requests/confirm/" + id, {}).subscribe(
        (resultData: any) => {
          console.log(resultData);
          this._coreService.openSnackBar('Request approved!', 'done');
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
    RejectRequest(id: number) {
      this.http.post("http://127.0.0.1:8000/api/Requests/reject/" + id, {}).subscribe(
        (resultData: any) => {
          console.log(resultData);
          this._coreService.openSnackBar('Request rejected!', 'done');
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
    DeliverRequest(id: number) {
      this.http.post("http://127.0.0.1:8000/api/Requests/deliver/" + id, {}).subscribe(
        (resultData: any) => {
          console.log(resultData);
          this._coreService.openSnackBar('Request delivered!', 'done');
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
    
}

