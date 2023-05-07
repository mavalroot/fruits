import { createSelector } from '@ngrx/store';
import { fruitFeature } from './fruit.reducer';

const { selectFruitState } = fruitFeature;

export const selectDetail = createSelector(
  selectFruitState,
  ({ data }) => data
);

export const selectError = createSelector(
  selectFruitState,
  ({ error }) => error
);

export const selectFruitPageViewModel = createSelector(
  selectDetail,
  selectError,
  (detail, error) => ({ detail, error })
);
