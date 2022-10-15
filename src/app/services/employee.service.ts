import { BaseService } from './base.service';
import { Employee } from './../models/employeeModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService<Employee> {

  constructor(httpClient:HttpClient) {
    super(httpClient,"/employees")
   }


}
