import { createSelector } from '@ngrx/store';
import { fruitFeature } from './fruit.reducer';

const { selectFruitState } = fruitFeature;

export const selectDetail = createSelector(
  selectFruitState,
  ({ data }) => data
);

export const selectFruitPageViewModel = createSelector(
  selectDetail,
  (detail) => {
    detail;
  }
);
