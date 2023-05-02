import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { PpeAddEditComponent } from 'src/app/ppe-add-edit/ppe-add-edit.component';
@Component({
  selector: 'app-ppe-stock',
  templateUrl: './ppe-stock.component.html',
  styleUrls: ['./ppe-stock.component.scss']
})
export class PpeStockComponent {
  constructor(private _dialog: MatDialog) {}
  openAddEditPPEForm()
{
 this._dialog.open(PpeAddEditComponent);
}

}
