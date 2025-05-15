import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  products = [
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

  addToCartHandler(event: any) {
    console.log(event);
  }
}
