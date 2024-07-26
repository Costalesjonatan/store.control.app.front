import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductComponent } from './../product/product.component';
import { ProductService } from '../../service/product.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  productService: ProductService = inject(ProductService);
  productList: Product[] = [];
  filteredProductList: Product[] = [];

  constructor() {
    this.productList = this.productService.getProductService();
  }

  filterResults(text: string) {
    console.log(text);
  }

}