import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
products:any[]=[];

  constructor(
    private productService:ProductService,
    private router:Router
  ){}

  ngOnInit(){

    this.productService
    .getProducts()
    .subscribe((res:any)=>{

      this.products =
      res.products;

    });
  }

  details(id:number){

    this.router.navigate([
      '/product',
      id
    ]);
  }
}
