import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from '@app/core/models';
import { FruitActions, FruitSelectors } from '@app/core/state/fruit';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  public model$: Observable<{
    detail: Fruit | undefined;
  }>;

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute
  ) {
    this.model$ = this.store.select(FruitSelectors.selectFruitPageViewModel);
  }

  ngOnInit() {
    const fruitName = this.route.snapshot.params['fruit'];

    this.store.dispatch(FruitActions.getDetail({ name: fruitName }));
  }
}
