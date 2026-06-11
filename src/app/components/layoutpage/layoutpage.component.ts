import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layoutpage',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './layoutpage.component.html',
  styleUrl: './layoutpage.component.scss'
})
export class LayoutpageComponent {
  constructor(private authService: AuthService) {}

  isAdmin(): boolean {
    return this.authService.getRole() === 'ADMIN';
  }
}