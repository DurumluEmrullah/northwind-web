import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((result)=>{
      this.products=result.data
    })
  }

}
