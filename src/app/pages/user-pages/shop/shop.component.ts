import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  products: any[] = [];
  loading = true;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {

    this.loading = true;

    this.productService
      .getProducts()
      .subscribe((res: any) => {

        this.products = res.products;

        this.loading = false;

      });
  }

  details(id: number) {

    this.router.navigate([
      '/product',
      id
    ]);
  }
}