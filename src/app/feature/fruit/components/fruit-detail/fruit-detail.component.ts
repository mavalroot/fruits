import { Component, Input } from '@angular/core';
import { FruitDetail } from '@app/core/models';
import { DisplayData } from '@app/core/models/display-data.interface';
import { objectToDisplayData } from '@app/core/utils/object.utils';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
})
export class FruitDetailComponent {
  @Input() set detail(value: FruitDetail | undefined) {
    this._detail = value;
    this.mainData = objectToDisplayData(value || {}).filter(
      (v) => v.label !== 'id'
    );
  }

  get detail(): FruitDetail | undefined {
    return this._detail;
  }

  public mainData: DisplayData[] = [];

  private _detail: FruitDetail | undefined;
}
