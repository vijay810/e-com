import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  cartItems: any[] = [];
  totalAmount = 0;
  successMessage = false;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {

    this.cartItems = this.cartService.getCart();

    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }

  placeOrder() {

    if (this.cartItems.length === 0) {
      return;
    }

    // Clear Cart

    localStorage.removeItem('cart');

    // Update Header Cart Count

    this.cartService.updateCartCount();

    // Show Success Message

    this.successMessage = true;

    // Redirect After 2 Seconds

    setTimeout(() => {

      this.router.navigate(['/shop']);

    }, 2000);

  }
}