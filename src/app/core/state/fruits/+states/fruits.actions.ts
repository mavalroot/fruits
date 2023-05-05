import { Fruit } from '@core/models/fruit.interface';
import { createAction, props } from '@ngrx/store';
import { FruitFilter } from '../models/fruit-filter.interface';
import { FruitPagination } from '../models/fruit-pagination.interface';

export const getFruits = createAction(
  '[Fruits] Get fruits',
  props<{ filter?: FruitFilter; pagination?: Partial<FruitPagination> }>()
);

export const getFruitsSuccess = createAction(
  '[Fruits] Get fruits Success',
  props<{ readonly data: Fruit[]; readonly pagination: FruitPagination }>()
);

export const getFruitsFailure = createAction('[Fruits] Get fruits Failure');
