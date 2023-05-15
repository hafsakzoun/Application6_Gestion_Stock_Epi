import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreService } from 'src/app/core/core.service';
import { Epi } from 'src/app/services/post.service';

@Component({
  selector: 'app-consult-by-post',
  templateUrl: './consult-by-post.component.html',
  styleUrls: ['./consult-by-post.component.scss']
})

export class ConsultByPostComponent {
  posts: any[]= [];
  epis:any[]= [];
  selectedEpi: any;
  newEpiLabel: string = '';
  showAddPostForm = false;
newPostName: string = '';

  
  constructor(private http: HttpClient, private core:CoreService ) {
    
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
  deletePost(id: number) {
    this.http.delete("http://127.0.0.1:8000/api/deletePost/" + id).subscribe((resultData: any) => {
      console.log(resultData);
      this.core.openSnackBar('Post deleted!', 'done');
    });
  }
  deleteEpi(postId: number, epiId: number) {
    this.http.delete(`http://127.0.0.1:8000/api/posts/${postId}/epis/${epiId}`).subscribe((resultData: any) => {
      console.log(resultData);
      // Find the post in the array and remove the deleted episode from its epis array
      const post = this.posts.find(p => p.id === postId);
      post.epis = post.epis.filter((e: Epi) => e.id !== epiId);
      this.core.openSnackBar('PEE deleted!', 'done');
    });
  }  
  addEpi(post: any, newEpiLabel: string) {
    const selectedEpi = this.epis.find(epi => epi.label === newEpiLabel);
  
    if (selectedEpi) {
      const epiId = selectedEpi.id;
  
      // Perform the necessary logic to add the epi to the post
      // For example, you can make an HTTP request to your API
  
      this.http
        .post(`http://127.0.0.1:8000/api/posts/${post.id}/epis`, { epiId })
        .subscribe(
          (resultData: any) => {
            console.log(resultData);
            // Update the post's epis array with the new epi
            post.epis.push(selectedEpi);
  
            // Reset the newEpiLabel value for the post
            post.newEpiLabel = '';
  
            // Display a success message or perform any other necessary action
            this.core.openSnackBar('PEE added!', 'done');
          },
          (error: any) => {
            // Handle the error appropriately
            console.error(error);
            this.core.openSnackBar('Error adding PEE', 'error');
          }
        );
    }
  }
  
  
  addPost(postName: string) {
    const newPost = {
      post_name: postName,
      epis: [],
      newEpiLabel: '', // Add the newEpiLabel property for the new post
    };
  
    this.http.post('http://127.0.0.1:8000/api/posts/store', newPost).subscribe(
      (resultData: any) => {
        console.log(resultData);
        // Add the new post to the posts array
        this.posts.push(resultData);
  
        // Display a success message or perform any other necessary action
        this.core.openSnackBar('Post added!', 'done');
      },
      (error: any) => {
        // Handle the error appropriately
        console.error(error);
        this.core.openSnackBar('Error adding post', 'error');
      }
    );
  }
  hideAddPostForm(){
    this.showAddPostForm = false;
  }
  }