import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model';
@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      img: 'https://picsum.photos/400/400?r=' + Math.random(),
      description: 'This is the description of the product 1',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 200,
      img: 'https://picsum.photos/400/400?r=' + Math.random(),
      description: 'This is the description of the product 2',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 300,
      img: 'https://picsum.photos/400/400?r=' + Math.random(),
      description: 'This is the description of the product 3',
    },
    {
      id: 4,
      title: 'Product 4',
      price: 400,
      img: 'https://picsum.photos/400/400?r=' + Math.random(),
      description: 'This is the description of the product 4',
    },
  ];

  cartProducts = signal<Product[]>([]);

  addToCartHandler(event: Product) {
    this.cartProducts.update((prev) => [...prev, event]);
  }
}
