import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-add-product-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-product-dialog.component.html',
  styleUrl: './add-product-dialog.component.scss',
})
export class AddProductDialogComponent {
  private numberPatetr: any = '^^0.{0}$|^[1-9]+[0-9]*$$';
  private productService: ProductService = inject(ProductService);

  constructor(public dialogRef: MatDialogRef<AddProductDialogComponent>) {}

  applyForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    sku: new FormControl('', [Validators.required, Validators.minLength(4)]),
    cost: new FormControl('', [
      Validators.required,
      Validators.pattern(this.numberPatetr),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern(this.numberPatetr),
    ]),
    availableUnits: new FormControl('', [
      Validators.required,
      Validators.pattern(this.numberPatetr),
    ]),
  });

  submitProduct() {
    if (this.applyForm.valid) {
      this.productService.createProduct(
        this.applyForm.value.sku ?? '',
        this.applyForm.value.name ?? '',
        Number(this.applyForm.value.price) ?? 0,
        Number(this.applyForm.value.cost) ?? 0,
        Number(this.applyForm.value.availableUnits) ?? 0
      );
      this.dialogRef.close('Submit succesfully');
    }
  }

  get sku() {
    return this.applyForm.get('sku');
  }

  get name() {
    return this.applyForm.get('name');
  }

  get cost() {
    return this.applyForm.get('cost');
  }

  get price() {
    return this.applyForm.get('price');
  }

  get availableUnits() {
    return this.applyForm.get('availableUnits');
  }
}
