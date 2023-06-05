import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

 

  private apiUrl = 'http://127.0.0.1:8000/api/Requests/sendEmail'; 

  constructor(private http: HttpClient) { }

  /* sendEmail(costCentre: string, requestDetails: any) {
    const emailData = {
      cost_centre: costCentre,
      request_details: requestDetails
    };

    return this.http.post(this.apiUrl, emailData);
  }*/

  
  SendEmail(costCentre: string, requestDetails: any) {
    const emailContent = `
      <app-request-email [requestData]="requestData"></app-request-email>
    `;

    const emailData = {
      cost_centre: costCentre,
      email_content: emailContent
    };

    return this.http.post('http://127.0.0.1:8000/api/Requests/sendEmail', emailData);
  }
}

