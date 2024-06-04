import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApiService } from '../../services/api.service';
import {
  NzFormControlComponent,
  NzFormDirective,
  NzFormItemComponent,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { Validators as MyValidators } from '@angular/forms';

@Component({
  selector: 'app-products-update-form',
  standalone: true,
  imports: [
    NzFormControlComponent,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputNumberComponent,
  ],
  templateUrl: './products-update-form.component.html',
  styleUrls: ['./products-update-form.component.css'],
})
export class ProductsUpdateFormComponent implements OnChanges {
  validateForm: FormGroup<{
    productName: FormControl<string>;
    description: FormControl<string>;
    quantityInStock: FormControl<number>;
    unitPrice: FormControl<number>;
  }>;

  @Input() product: any;
  @Output() productUpdated = new EventEmitter<void>();

  constructor(
    private fb: NonNullableFormBuilder,
    private apiService: ApiService,
    private notification: NzNotificationService
  ) {
    const { required } = MyValidators;
    this.validateForm = this.fb.group({
      productName: ['', [required]],
      description: ['', [required]],
      quantityInStock: [0, [required]],
      unitPrice: [0, [required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      this.setFormValues();
    }
  }

  setFormValues(): void {
    if (this.product) {
      this.validateForm.setValue({
        productName: this.product.productName,
        description: this.product.description,
        quantityInStock: this.product.quantityInStock,
        unitPrice: this.product.unitPrice,
      });
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.apiService
        .updateProduct(this.product.id, this.validateForm.value)
        .subscribe(() => {
          this.createNotification(
            'success',
            `${this.validateForm.value.productName} ${this.validateForm.value.description}`,
            'The Product has been updated successfully!'
          );
          this.productUpdated.emit();
        });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }
}
