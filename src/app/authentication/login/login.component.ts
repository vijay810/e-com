import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  errorMessage = '';

  isAdmin = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {

    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      role: ['USER']
    });

  }

  changeRole() {

    const role =
      this.isAdmin ? 'ADMIN' : 'USER';

    this.loginForm.patchValue({
      role: role
    });

  }

  login() {

    const { username, password } =
      this.loginForm.value;

    const success =
      this.auth.login(username, password);

    if (success) {

      const role =
        this.loginForm.value.role;

      if (role === 'ADMIN') {

        this.router.navigate([
          '/admin/dashboard'
        ]);

      } else {

        this.router.navigate([
          '/shop'
        ]);

      }

    } else {
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
      this.errorMessage =
        'Invalid Credentials';

    }
  }
}