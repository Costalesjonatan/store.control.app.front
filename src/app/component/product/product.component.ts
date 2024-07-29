import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interface/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
}
