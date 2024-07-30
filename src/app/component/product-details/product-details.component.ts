import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interface/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { ExpansionPanelComponent } from '../../element/expansion-panel/expansion-panel.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, ExpansionPanelComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  product: Product;

  constructor() {
    const productId = parseInt(this.route.snapshot.params['id'], 10);
    this.product = this.productService.getHousingLocationById(productId);
  }

}
