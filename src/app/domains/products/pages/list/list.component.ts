import {
  Component,
  computed,
  inject,
  Input,
  signal,
  SimpleChanges,
} from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Product } from '@/domains/shared/models/product.model';
import { Category } from '@/domains/shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  @Input() category_id?: string;

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }

  addToCartHandler(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCartHandler(product: Product) {
    this.cartService.removeFromCart(product);
  }

  getProducts() {
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
    });
  }
}
