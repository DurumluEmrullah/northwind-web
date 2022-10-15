import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/orderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order>{

 
  constructor(httpClient:HttpClient) {
    super(httpClient,"/orders")
   }
}
