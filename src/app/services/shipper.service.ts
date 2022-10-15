import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Shipper } from '../models/shipperModel';

@Injectable({
  providedIn: 'root'
})
export class ShipperService extends BaseService<Shipper>{

 
  constructor(httpClient:HttpClient) {
    super(httpClient,"/shippers")
   }
}
