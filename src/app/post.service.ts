import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiURL = 'https://jsonplaceholder.typicode.com/posts';

  getPosts():Observable<any>{
    return this.http.get(this.apiURL);
  }

}
