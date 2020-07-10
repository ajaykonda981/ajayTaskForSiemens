import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(criteria:HttpParams= new HttpParams()) {
  console.log('criteri is', criteria)
    return this.http.get('https://jsonplaceholder.typicode.com/users',{params:criteria})
  }

  getDetailsById(id) {
    let httpParams = new HttpParams();
    if(id){
    httpParams = httpParams.set('userId',id);
    }
    return this.http.get('https://jsonplaceholder.typicode.com/posts',{params:httpParams})
  }
}
