import { Shipper } from './../../models/shipperModel';
import { ShipperService } from './../../services/shipper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.css']
})
export class ShipperComponent implements OnInit {

  shippers:Shipper[]=[];

  constructor(private shipperService:ShipperService) { }

  ngOnInit(): void {

    this.shipperService.getAll().subscribe((result)=>{
      this.shippers =result.data;
    })
  }

}
