import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input({ required: true }) product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    img: '',
  };

  @Output() addToCart = new EventEmitter<Product>();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
