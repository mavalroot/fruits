import { FruitDetail } from '@app/core/models/fruit-detail.interface';
import { createFeature, createReducer, on } from '@ngrx/store';
import * as FruitActions from './fruit.actions';
import { FruitError } from '../models/fruit-error.interface';

export interface FruitState {
  readonly data: FruitDetail | undefined;
  readonly error: FruitError | undefined;
}

const initialState: FruitState = {
  data: undefined,
  error: undefined,
};

export const fruitFeature = createFeature({
  name: 'fruit',
  reducer: createReducer(
    initialState,
    on(FruitActions.getDetail, (state) => ({
      ...state,
      error: undefined,
    })),
    on(FruitActions.getDetailSuccess, (state, { data }) => ({
      ...state,
      data,
    })),
    on(FruitActions.getDetailFailure, (state, { error }) => ({
      ...state,
      error,
    }))
  ),
});
