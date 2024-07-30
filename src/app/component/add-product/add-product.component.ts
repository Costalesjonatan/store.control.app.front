import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injectable
} from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogContent,
    MatFormField,
    MatLabel,
    MatDialogActions,
    MatDialogClose,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  //readonly dialogRef = inject(MatDialogRef<this>);
  //readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  //readonly animal = model(this.data.animal);

  constructor() {}

  onNoClick(): void {
    //this.dialogRef.close();
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
