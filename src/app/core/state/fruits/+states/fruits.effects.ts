import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FruitsService } from '../service/fruits.service';
import * as FruitsActions from './fruits.actions';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly fruitsService: FruitsService
  ) {}

  readonly getBooksList = createEffect(() =>
    this.actions$.pipe(
      ofType(FruitsActions.getFruits),
      switchMap(({ filter, pagination }) =>
        this.fruitsService.getFruits(filter).pipe(
          map((data) => {
            const paginationOpt = this.fruitsService.getPagination(
              data,
              pagination
            );
            return FruitsActions.getFruitsSuccess({
              pagination: paginationOpt,
              data: this.fruitsService.getPaginatedData(data, paginationOpt),
            });
          })
        )
      )
    )
  );
}
