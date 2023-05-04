import { Component } from '@angular/core';
import { FruitsActions } from '@app/core/state/fruits';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(FruitsActions.getFruits({}));
  }
}
