import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FruitService } from '../services/fruit.service';
import { FruitActions } from '..';
import { map, catchError, of, switchMap, repeat } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitEffects {
  constructor(
    private readonly action$: Actions,
    private readonly fruitService: FruitService
  ) {}

  readonly getFruitDetail = createEffect(() =>
    this.action$.pipe(
      ofType(FruitActions.getDetail),
      switchMap(({ name }) =>
        this.fruitService.getDetail(name).pipe(
          map((data) => FruitActions.getDetailSuccess({ data })),
          catchError((error) =>
            of(FruitActions.getDetailFailure({ error: error.error }))
          )
        )
      )
    )
  );
}
