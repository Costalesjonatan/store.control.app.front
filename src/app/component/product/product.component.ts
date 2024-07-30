import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    ProductComponent,
    ProductDetailsComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  productService: ProductService = inject(ProductService);
  productList: Product[] = [];
  filteredProductList: Product[] = [];

  constructor() {
    this.productList = this.productService.getProductService();
    this.filteredProductList = this.productList;
  }

  @Input() product!: Product;

  filterResults(text: string) {
    if (!text) {
      this.filteredProductList = this.productList;
      return;
    }
    this.filteredProductList = this.productList.filter((product) =>
      product?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
