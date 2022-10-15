import { SupplierService } from './../../services/supplier.service';
import { Supplier } from './../../models/supplierModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  suppliers:Supplier[]=[];

  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void {
    this.supplierService.getAll().subscribe((result)=>{
      this.suppliers=result.data;
    })
  }

}
