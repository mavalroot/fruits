import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Fruit } from '@app/core/models';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { formlyFields } from './form-config';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = formlyFields;

  onSubmit(model: unknown) {
    console.log(model);
  }
}
