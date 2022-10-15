import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Log } from '../models/logModel';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<ListResponseModel<Log>> {
    return this.httpClient.get<ListResponseModel<Log>>("http://localhost:8080/logs/getAll");
  }
}
