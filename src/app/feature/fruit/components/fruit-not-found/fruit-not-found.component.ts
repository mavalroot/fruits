import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruit-not-found',
  templateUrl: './fruit-not-found.component.html',
})
export class FruitNotFoundComponent {
  @Input() fruitName: string = '';
}
