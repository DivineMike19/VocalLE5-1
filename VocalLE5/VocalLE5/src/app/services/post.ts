import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  addPost(postData: any) {
    return this.http.post('https://localhost:7152/api/post/add', postData);
  }

  getPosts() {
    return this.http.get('https://localhost:7152/api/Post');
  }

  getPostDetails(id: string) {
    return this.http.get(`https://localhost:7152/api/post/details/${id}`);
  }
}
