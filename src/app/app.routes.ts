import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'product',
    component: ProductComponent,
    title: 'Product component',
  },
];
