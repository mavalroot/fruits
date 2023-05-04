import { Fruit } from '@core/models/fruit.interface';
import { createAction, props } from '@ngrx/store';
import { FruitFilter } from '../models/fruit-filter.interface';

export const getFruits = createAction(
  '[Fruits] Get fruits',
  props<{ filter?: FruitFilter }>()
);

export const getFruitsSuccess = createAction(
  '[Fruits] Get fruits Success',
  props<{ readonly data: Fruit[] }>()
);

export const getFruitsFailure = createAction('[Fruits] Get fruits Failure');
