import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './product.component.html',
  standalone: true,
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter<Product>();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
