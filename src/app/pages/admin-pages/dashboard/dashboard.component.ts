import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  totalProducts = 0;
  totalUsers = 0;
  totalOrders = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {

    forkJoin({
      products: this.http.get<any>(
        `${environment.apiUrl}/products`
      ),
      users: this.http.get<any>(
        `${environment.apiUrl}/users`
      ),
      carts: this.http.get<any>(
        `${environment.apiUrl}/carts`
      )
    }).subscribe({
      next: (res) => {
        this.totalProducts = res.products.total;
        this.totalUsers = res.users.total;
        this.totalOrders = res.carts.total;

        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}