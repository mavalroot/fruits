import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruit-not-found',
  templateUrl: './fruit-not-found.component.html',
})
export class FruitNotFoundComponent {
  @Input() fruitName: string = '';

  constructor(private readonly router: Router) {}

  public goBack(): void {
    this.router.navigate(['/fruits/list'])
  }

  public goToAddFruit(): void {
    this.router.navigate(['/fruit/add'])
  }
}
