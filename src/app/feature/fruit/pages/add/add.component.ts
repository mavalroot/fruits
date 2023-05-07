import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { formlyFields } from './form-config';
import { Store } from '@ngrx/store';
import { FruitActions } from '@app/core/state/fruit';
import { FruitDetail } from '@app/core/models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = formlyFields;

  constructor(private readonly store: Store) {}

  public addFruit(model: unknown) {
    if (this.form.valid && this.form.dirty) {
      this.store.dispatch(
        FruitActions.addFruit({ data: { ...(model as FruitDetail) } })
      );
    } else {
      this.form.markAllAsTouched();
    }
  }
}
