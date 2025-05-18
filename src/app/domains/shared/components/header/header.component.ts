import { Component, Input, inject, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);

  total = this.cartService.total;
  cart = this.cartService.cart;

  toogleSideMenu() {
    this.hideSideMenu.update((prev) => !prev);
  }

  removeFromCartHandler(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
