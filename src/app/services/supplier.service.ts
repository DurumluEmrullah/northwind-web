import { BaseService } from './base.service';
import { Supplier } from './../models/supplierModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService extends BaseService<Supplier> {

 
  constructor(httpClient:HttpClient) {
    super(httpClient,"/suppliers")
   }
}
