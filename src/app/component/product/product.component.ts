import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    ProductComponent,
    ProductDetailsComponent,
    AddProductComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  productService: ProductService = inject(ProductService);
  addProductComponent: AddProductComponent = inject(AddProductComponent);
  productList: Product[] = [];
  filteredProductList: Product[] = [];

  constructor() {
    this.updateProductList();
  }

  @Input() product!: Product;

  filterResultsByName(text: string) {
    if (!text) {
      this.filteredProductList = this.productList;
      return;
    }
    this.filteredProductList = this.productList.filter((product) =>
      product?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  refresh(): void {
    this.updateProductList();
    window.location.reload();
  }

  private updateProductList() {
    this.productList = this.productService.getAllProduct();
    this.filteredProductList = this.productList;
  }
}
