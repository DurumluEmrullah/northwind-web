import { BaseService } from './base.service';
import { ListResponseModel } from './../models/listResponseModel';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customerModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<Customer> {


  constructor(httpClient:HttpClient) {
    super(httpClient,"/customers")
   }




}
