import { createFeature, createReducer, on } from '@ngrx/store';

import * as FruitsActions from './fruits.actions';
import { Fruit } from '@core/models/fruit.interface';
import { FruitFilter } from '../models/fruit-filter.interface';
import { FruitPagination, PAGE_SIZE_OPTIONS } from '../models/fruit-pagination.interface';

export interface FruitsState {
  readonly data: Fruit[];
  readonly pagination: FruitPagination;
  readonly filter: FruitFilter | undefined;
}

const initialState: FruitsState = {
  data: [],
  filter: undefined,
  pagination: {
    length: 0,
    page: 0,
    size: 0,
    pageSizeOptions: PAGE_SIZE_OPTIONS,
  },
};

export const fruitsFeature = createFeature({
  name: 'fruits',
  reducer: createReducer(
    initialState,
    on(FruitsActions.getFruits, (state, { filter }) => ({
      ...state,
      data: [],
      filter,
    })),
    on(FruitsActions.getFruitsSuccess, (state, { data, pagination }) => ({
      ...state,
      data: data,
      pagination,
    })),
    on(FruitsActions.getFruitsFailure, (state) => ({
      ...state,
      data: initialState.data,
      pagination: initialState.pagination
    }))
  ),
});
