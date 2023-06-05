import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-requestemail',
  template: `
    <div>
      <h2>New Request</h2>
      <p>Request Details:</p>
      <ul>
        <li>Cost Centre: {{ requestData.cost_centre }}</li>
        <li>Name: {{ requestData.name }}</li>
        <li>TEID: {{ requestData.TEID }}</li>
        <li>Department: {{ requestData.Department }}</li>
        <li>PPE Label: {{ requestData.ppe_label }}</li>
        <li>PPE Size: {{ requestData.ppe_size }}</li>
        <li>Requested Quantity: {{ requestData.RequestedQt }}</li>
      </ul>
    </div>
  `,
  styles: [
    `
      div {
        border: 1px solid #ccc;
        padding: 10px;
      }
    `,
  ],
  styleUrls: ['./requestemail.component.scss']
})
export class RequestemailComponent {
  @Input() requestData: any;

 
}
