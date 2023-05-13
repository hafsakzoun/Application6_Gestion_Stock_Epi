import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consult-by-post',
  templateUrl: './consult-by-post.component.html',
  styleUrls: ['./consult-by-post.component.scss']
})
export class ConsultByPostComponent {
  posts: any[]= [];

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
  
  
  getPosts() {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/posts');
  }
  
}
