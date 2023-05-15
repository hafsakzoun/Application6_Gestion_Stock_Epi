import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consult-user-post',
  templateUrl: './consult-user-post.component.html',
  styleUrls: ['./consult-user-post.component.scss']
})
export class ConsultUserPostComponent {
  posts: any[]= [];
  epis:any[]= [];
  constructor(private http: HttpClient ) {
    
  }
  ngOnInit() {
    this.getPosts().subscribe(data => {
      this.posts = data;
    });
    this.getEpis().subscribe(data => {
      this.epis = data;
    });
  }
  getPosts() {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/posts');
  }
  getEpis(){
    return this.http.get<any[]>('http://127.0.0.1:8000/api/epis');
  }
}
