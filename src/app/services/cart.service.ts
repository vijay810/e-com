import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  constructor() {
    this.updateCartCount();
  }

  addToCart(product: any) {

    const cart = this.getCart();

    cart.push(product);

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );

    this.updateCartCount();
  }

  getCart() {

    const cart = localStorage.getItem('cart');

    return cart ? JSON.parse(cart) : [];
  }

  removeItem(index: number) {

    const cart = this.getCart();

    cart.splice(index, 1);

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );

    this.updateCartCount();
  }

  updateCartCount() {

    const cart = this.getCart();

    this.cartCount.next(cart.length);
  }
}