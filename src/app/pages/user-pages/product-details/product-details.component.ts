import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
 product:any;

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private cartService:CartService
  ){}

  ngOnInit(){

    const id =
      this.route.snapshot.params['id'];

    this.productService
    .getProduct(id)
    .subscribe((res:any)=>{

      this.product = res;

    });
  }

  addToCart(){
    this.cartService.addToCart(
      this.product
    );
  }

}
