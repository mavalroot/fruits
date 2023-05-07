import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit, FruitDetail } from '@app/core/models';
import { FruitActions, FruitSelectors } from '@app/core/state/fruit';
import { FruitError } from '@app/core/state/fruit/models/fruit-error.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  public model$: Observable<{
    detail: Fruit | undefined;
    error: FruitError | undefined;
  }>;

  public fruitName: string = '';

  public detailCommonFields: (keyof FruitDetail)[] = ['name', 'family', 'genus', 'order']

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute
  ) {
    this.model$ = this.store.select(FruitSelectors.selectFruitPageViewModel);
  }

  ngOnInit() {
    this.fruitName = this.route.snapshot.params['fruit'];

    this.store.dispatch(FruitActions.getDetail({ name: this.fruitName }));
  }
}
