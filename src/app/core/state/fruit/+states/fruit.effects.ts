import { addFruitSuccess, addFruitFailure } from './fruit.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FruitService } from '../services/fruit.service';
import { FruitActions } from '..';
import { map, catchError, of, switchMap, tap } from 'rxjs';
import { DialogService } from '@app/core/services/dialog.service';

@Injectable({
  providedIn: 'root',
})
export class FruitEffects {
  constructor(
    private readonly action$: Actions,
    private readonly fruitService: FruitService,
    private readonly dialogs: DialogService,
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

  readonly addFruit = createEffect(() =>
    this.action$.pipe(
      ofType(FruitActions.addFruit),
      switchMap(({ data }) =>
        this.fruitService.addFruit(data).pipe(
          map(({ success }) =>
            FruitActions.addFruitSuccess({ message: success })
          ),
          catchError((error) =>
            of(FruitActions.addFruitFailure({ message: error?.error?.error }))
          )
        )
      )
    )
  );

  readonly addFruitSuccess = createEffect(() => this.action$.pipe(
    ofType(FruitActions.addFruitSuccess),
    tap(({message}) => {
      this.dialogs.openConfirm('Fruit submited successfully', message);
    })
  ), {dispatch: false})

  readonly addFruitFailure = createEffect(() => this.action$.pipe(
    ofType(FruitActions.addFruitFailure),
    tap(({message}) => {
      this.dialogs.openError(message);
    })
  ), {dispatch: false})
}
