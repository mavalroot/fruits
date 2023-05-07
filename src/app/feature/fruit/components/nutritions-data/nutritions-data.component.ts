import { Component, Input } from '@angular/core';
import { Nutritions } from '@app/core/models';

@Component({
  selector: 'app-nutritions-data',
  templateUrl: './nutritions-data.component.html',
  styleUrls: ['./nutritions-data.component.scss']
})
export class NutritionsDataComponent {
  @Input() data: Nutritions | undefined;

}
