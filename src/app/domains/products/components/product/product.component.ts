import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input({ required: true }) img: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) description: string = '';
  
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit('Hola este es un evento desde el componente hijo');
  }
}
