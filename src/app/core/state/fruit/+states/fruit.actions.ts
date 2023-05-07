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
