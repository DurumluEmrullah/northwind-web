import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orderModel';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders:Order[]=[];

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe((result)=>{
      this.orders=result.data
    })
  }

}
