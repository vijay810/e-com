import { Routes } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';

import { DashboardComponent } from './pages/admin-pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/admin-pages/orders/orders.component';
import { ProductsComponent } from './pages/admin-pages/products/products.component';

import { ShopComponent } from './pages/user-pages/shop/shop.component';
import { ProductDetailsComponent } from './pages/user-pages/product-details/product-details.component';
import { CartComponent } from './pages/user-pages/cart/cart.component';
import { CheckoutComponent } from './pages/user-pages/checkout/checkout.component';

import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { userGuard } from './guards/user.guard';

import { LayoutpageComponent } from './components/layoutpage/layoutpage.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '',
    component: LayoutpageComponent,
    canActivate: [authGuard],
    children: [

      // Admin Routes

      {
        path: 'admin/dashboard',
        component: DashboardComponent,
        canActivate: [adminGuard]
      },

      {
        path: 'admin/products',
        component: ProductsComponent,
        canActivate: [adminGuard]
      },

      {
        path: 'admin/orders',
        component: OrdersComponent,
        canActivate: [adminGuard]
      },

      // User Routes

      {
        path: 'shop',
        component: ShopComponent,
        canActivate: [userGuard]
      },

      {
        path: 'product/:id',
        component: ProductDetailsComponent,
        canActivate: [userGuard]
      },

      {
        path: 'cart',
        component: CartComponent,
        canActivate: [userGuard]
      },

      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [userGuard]
      }

    ]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];