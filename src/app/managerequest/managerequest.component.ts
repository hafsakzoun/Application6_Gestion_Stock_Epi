import { Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-managerequest',
  templateUrl: './managerequest.component.html',
  styleUrls: ['./managerequest.component.scss']
})
export class ManagerequestComponent implements OnInit{
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
    'status',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  pendingRequestCount: any;
  approvedRequestCount: any;
  rejectedRequestCount: any;
  deliveredRequestCount: any;
  constructor(private http: HttpClient, 
    private _dialog: MatDialog,
    private _coreService: CoreService ) {}
    ngOnInit(): void {

    }
    getPendingRequests() {
      this.http.get("http://127.0.0.1:8000/api/Requests/OnHold").subscribe({
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

    getValidatedRequests() {
      this.http.get("http://127.0.0.1:8000/api/Requests/Validated").subscribe({
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

    getUnvalidatedRequests() {
      this.http.get("http://127.0.0.1:8000/api/Requests/Unvalidated").subscribe({
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

    ApproveRequest(id: number) {
      this.http.post("http://127.0.0.1:8000/api/Requests/approve/" + id, {}).subscribe(
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
      this.http.post("http://127.0.0.1:8000/api/Requests/rejectByManager/" + id, {}).subscribe(
        (resultData: any) => {
          console.log(resultData);
          this._coreService.openSnackBar('Request approved!', 'done');
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  
}