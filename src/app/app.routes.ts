import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/not-found/not-found.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./domains/products/pages/list/list.component').then(
            (m) => m.ListComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./domains/info/pages/about/about.component').then(
            (m) => m.AboutComponent
          ),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import(
            './domains/products/pages/product-detail/product-detail.component'
          ).then((m) => m.ProductDetailComponent),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./domains/info/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
