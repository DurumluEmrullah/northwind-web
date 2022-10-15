import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  apiUrl: String = 'http://localhost:8080';
  httpClient: HttpClient;
  url:String="";

  constructor(httpClient: HttpClient, url: String) {
    this.httpClient = httpClient;
    this.url=url
  }

  

  getAll(): Observable<ListResponseModel<T>> {
    return this.httpClient.get<ListResponseModel<T>>(this.apiUrl+""+this.url + '/getAll');
  }
}
