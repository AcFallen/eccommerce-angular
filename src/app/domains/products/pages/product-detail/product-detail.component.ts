import { Product } from '@/domains/shared/models/product.model';
import { ProductService } from '@/domains/shared/services/product.service';
import { Component, inject, Input, signal } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CartService } from '@/domains/shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() id?: string;
  private productService = inject(ProductService);
  product = signal<Product | null>(null);
  cover = signal<string>('');
  private cartService = inject(CartService);

  ngOnInit() {
    if (this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  changeCover(image: string) {
    this.cover.set(image);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
