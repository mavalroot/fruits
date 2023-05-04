import { createFeature, createReducer, on } from '@ngrx/store';

import * as FruitsActions from './fruits.actions';
import { Fruit } from '@core/models/fruit.interface';

export interface FruitsState {
  readonly data: Fruit[];
}

const initialState: FruitsState = {
  data: [],
};

export const fruitsFeature = createFeature({
  name: 'fruits',
  reducer: createReducer(
    initialState,
    on(FruitsActions.getFruits, (state) => ({
      ...state,
      data: [],
    })),
    on(FruitsActions.getFruitsSuccess, (state, { data }) => ({
      ...state,
      data: data || [],
    }))
  ),
});
