import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
orders: any[] = [];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {

    this.productService
      .getOrders()
      .subscribe((res: any) => {

        this.orders =
          res.carts;

      });
  }
}