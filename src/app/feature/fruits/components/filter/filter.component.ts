import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { FruitsActions } from '@app/core/state/fruits';
import { FruitSearchValuesEnum } from '@app/core/state/fruits/models/fruit-filter.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @ViewChild('filterForm', { static: true }) filterForm!: NgForm;

  public searchOptions = [
    { value: FruitSearchValuesEnum.family, label: 'Family' },
    { value: FruitSearchValuesEnum.genus, label: 'Genus' },
    { value: FruitSearchValuesEnum.order, label: 'Order' },
  ];
  public form: FormGroup;

  public isActive: boolean = false;

  constructor(private readonly fb: FormBuilder, private readonly store: Store) {
    this.form = this.fb.group({
      field: ['', [Validators.required]],
      value: ['', [Validators.required]],
    });
  }

  public search(): void {
    if (this.form.valid) {
      const { field, value } = this.form.value;
      this.store.dispatch(
        FruitsActions.getFruits({
          filter: {
            field,
            value,
          },
        })
      );
      this.isActive = true;
    }
  }

  public clear(): void {
    if (this.isActive) {
      this.isActive = false;
      this.filterForm.resetForm();
      this.store.dispatch(FruitsActions.getFruits({}));
    }
  }
}
