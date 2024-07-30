import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interface/product';
import { RouterLink } from '@angular/router';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink, MatExpansionModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product!: Product;
  readonly panelOpenState = signal(false);
}
