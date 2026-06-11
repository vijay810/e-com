import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(
      `${environment.apiUrl}/products`
    );
  }

  getProduct(id:number) {
    return this.http.get(
      `${environment.apiUrl}/products/${id}`
    );
  }

  getUsers() {
    return this.http.get(
      `${environment.apiUrl}/users`
    );
  }

  getOrders() {
    return this.http.get(
      `${environment.apiUrl}/carts`
    );
  }
}