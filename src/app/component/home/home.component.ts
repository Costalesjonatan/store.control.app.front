import { Component, importProvidersFrom, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductComponent } from './../product/product.component';
import { ProductService } from '../../service/product.service';
import { Product } from '../../interface/product';
import { ExpansionPanelComponent } from '../../element/expansion-panel/expansion-panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent, ExpansionPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  productService: ProductService = inject(ProductService);
  productList: Product[] = [];
  filteredProductList: Product[] = [];

  constructor() {
    this.productList = this.productService.getProductService();
    this.filteredProductList = this.productList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProductList = this.productList;
      return;
    }
    this.filteredProductList = this.productList.filter((product) =>
      product?.name.toLowerCase().includes(text.toLowerCase()),
    );
  }

}
