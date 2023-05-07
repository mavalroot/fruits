import { FruitDetail } from '@app/core/models/fruit-detail.interface';
import { createAction, props } from '@ngrx/store';
import { FruitError } from '../models/fruit-error.interface';

export const getDetail = createAction(
  '[Fruit] Get detail',
  props<{ name: string }>()
);

export const getDetailSuccess = createAction(
  '[Fruit] Get detail success',
  props<{ data: FruitDetail }>()
);

export const getDetailFailure = createAction(
  '[Fruit] Get detail failure',
  props<{ error: FruitError }>()
);

export const addFruit = createAction(
  '[Fruit] Add fruit',
  props<{ data: FruitDetail }>()
);

export const addFruitSuccess = createAction(
  '[Fruit] Add fruit success',
  props<{ message: string }>()

);

export const addFruitFailure = createAction(
  '[Fruit] Add fruit failure',
  props<{ message: string }>()

);
