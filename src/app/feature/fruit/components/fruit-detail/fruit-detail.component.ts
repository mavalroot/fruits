import { Component, Input } from '@angular/core';
import { FruitDetail } from '@app/core/models';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
})
export class FruitDetailComponent {
  @Input() detail: FruitDetail | undefined;
  @Input() fields: (keyof FruitDetail)[] = [];
}
