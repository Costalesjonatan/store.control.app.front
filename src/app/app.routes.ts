import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details',
    component: ProductDetailsComponent,
    title: 'Home d',
  },
];
