import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-product-dialog.component.html',
  styleUrl: './add-product-dialog.component.scss',
})
export class AddProductDialogComponent {
  applyForm = new FormGroup({
    name: new FormControl(''),
    sku: new FormControl(''),
    cost: new FormControl(''),
    price: new FormControl(''),
    availableUnits: new FormControl(''),
  })

  submitProduct() {
    console.log("submitProduct not implemented yet.")
  }
}
