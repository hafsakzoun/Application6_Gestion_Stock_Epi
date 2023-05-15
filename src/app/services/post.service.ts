import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// post.interface.ts

export interface Post {
  id: number;
  post_name: string;
  epis: Epi[];
}

export interface Epi {
  id: number;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:8000/api'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Get all posts with epis
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts?_embed=epis`);
  }

  // Get a post by ID with its epis
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}?_embed=epis`);
  }

  // Add a new post
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/posts`, post);
  }

  // Update a post by ID
  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/posts/${id}`, post);
  }

  // Delete a post by ID
  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.baseUrl}/posts/${id}`);
  }

  // Add a new epi to a post
  addEpi(postId: number, epi: Epi): Observable<Epi> {
    return this.http.post<Epi>(`${this.baseUrl}/epis`, { ...epi, postId });
  }

  // Delete an epi by ID
  deleteEpi(id: number): Observable<Epi> {
    return this.http.delete<Epi>(`${this.baseUrl}/epis/${id}`);
  }

}
