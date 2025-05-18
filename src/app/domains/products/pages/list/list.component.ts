import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  products = signal<Product[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  addToCartHandler(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCartHandler(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
