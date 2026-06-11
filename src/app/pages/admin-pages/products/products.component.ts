import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
products: any[] = [];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {

    this.productService
      .getProducts()
      .subscribe((res: any) => {

        this.products =
          res.products;

      });
  }
}