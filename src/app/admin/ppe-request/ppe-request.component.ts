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
    'createdDate',
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
      this.getPendingRequests();
      this.countPendingRequests();
      this.countApprovedRequests();
      this.countRejectedRequests();
      this.countDeliveredRequests();
    }
    getPendingRequests() {
      this.http.get("http://127.0.0.1:8000/api/Requests/Pending").subscribe({
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

    getApprovedRequests() {
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

    getRejectedRequests() {
      this.http.get("http://127.0.0.1:8000/api/Requests/Rejected").subscribe({
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
    
    getDeliveredRequests() {
      this.http.get("http://127.0.0.1:8000/api/Requests/Delivered").subscribe({
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
      this.http.post("http://127.0.0.1:8000/api/Requests/confirm/" + id, {}).subscribe(
        (resultData: any) => {
          if (resultData.status === 'Approved') {
            console.log(resultData);
            this._coreService.openSnackBar('Request already approved!', 'warning');
          } else {
            console.log(resultData);
            this._coreService.openSnackBar('Request approved!', 'done');
          }
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
    
    RejectRequest(id: number) {
      this.http.post("http://127.0.0.1:8000/api/Requests/reject/" + id, {}).subscribe(
        (resultData: any) => {
          if (resultData === 'Request is already rejected!') {
            this._coreService.openSnackBar('Request is already rejected', 'warning');
          }else {
            console.log(resultData);
            this._coreService.openSnackBar('Request rejected!', 'done');
          }
          
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
    
    
    DeliverRequest(id: number) {
      this.http.post("http://127.0.0.1:8000/api/Requests/deliver/" + id, {}).subscribe(
        (resultData: any) => {
          if (resultData === 'Request is already rejected!') {
            this._coreService.openSnackBar('Request is already delivered', 'warning');
          }
          else {
            console.log(resultData);
            this._coreService.openSnackBar('Request delivered!', 'done');
          }
        },
        (error: any) => {
          console.error(error);
        }
      );
    }

    countPendingRequests() {
      this.http
        .get("http://127.0.0.1:8000/api/Requests/CountPending")
        .subscribe({
          next: (res: any) => {
            this.pendingRequestCount = res.count;
          },
          error: console.log,
        });
    }
    countApprovedRequests() {
      this.http
        .get("http://127.0.0.1:8000/api/Requests/CountApproved")
        .subscribe({
          next: (res: any) => {
            this.approvedRequestCount = res.count;
          },
          error: console.log,
        });
    }
    countRejectedRequests() {
      this.http
        .get("http://127.0.0.1:8000/api/Requests/CountRejected")
        .subscribe({
          next: (res: any) => {
            this.rejectedRequestCount = res.count;
          },
          error: console.log,
        });
    }
    countDeliveredRequests() {
      this.http
        .get("http://127.0.0.1:8000/api/Requests/CountDelivered")
        .subscribe({
          next: (res: any) => {
            this.deliveredRequestCount = res.count;
          },
          error: console.log,
        });
    }

    
}

