import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartItems: any[] = [];
  totalAmount = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCart();
  }

 loadCart() {

  this.cartItems = this.cartService.getCart();

  this.totalAmount = Number(
    this.cartItems
      .reduce((sum, item) => sum + item.price, 0)
      .toFixed(2)
  );
}

  removeItem(index: number) {

    this.cartService.removeItem(index);

    this.loadCart();
  }

  checkout() {

    if (this.cartItems.length === 0) {
      return;
    }

    this.router.navigate([
      '/checkout'
    ]);
  }
}