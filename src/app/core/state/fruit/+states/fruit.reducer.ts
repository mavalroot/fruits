import { FruitDetail } from '@app/core/models/fruit-detail.interface';
import { createFeature, createReducer, on } from '@ngrx/store';
import * as FruitActions from './fruit.actions';

export interface FruitState {
  readonly data: FruitDetail | undefined;
}

const initialState: FruitState = {
  data: undefined,
};

export const fruitFeature = createFeature({
  name: 'fruit',
  reducer: createReducer(
    initialState,
    on(FruitActions.getDetail, (state) => ({
      ...state,
    })),
    on(FruitActions.getDetailSuccess, (state, { data }) => ({
      ...state,
      data,
    }))
  ),
});
