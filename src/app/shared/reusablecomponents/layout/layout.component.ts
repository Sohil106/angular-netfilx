import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../../pages/home/home.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HomeComponent],

  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
