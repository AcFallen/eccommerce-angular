import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => {
    const total = this.cart().reduce((acc, product) => acc + product.price, 0);
    return total;
  });

  addToCart(product: Product) {
    this.cart.update((prev) => [...prev, product]);
  }

  removeFromCart(product: Product) {
    this.cart.update((prev) => prev.filter((p) => p.id !== product.id));
  }
}
