import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consult-user-area',
  templateUrl: './consult-user-area.component.html',
  styleUrls: ['./consult-user-area.component.scss']
})
export class ConsultUserAreaComponent {
  areas: any[]= [];
  epis:any[]= [];
  constructor(private http: HttpClient ) {
    
  }
  ngOnInit() {
    this.getAreas().subscribe(data => {
      this.areas = data;
    });
    this.getEpis().subscribe(data => {
      this.epis = data;
    });
  }
  getAreas() {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/areas');
  }
  getEpis(){
    return this.http.get<any[]>('http://127.0.0.1:8000/api/epis');
  }
}
