import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }

  addToCartHandler(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCartHandler(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
