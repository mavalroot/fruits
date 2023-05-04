import { createSelector } from '@ngrx/store';
import { fruitsFeature } from './fruits.reducer';

const { selectFruitsState } = fruitsFeature;

export const selectFruits = createSelector(
  selectFruitsState,
  ({ data }) => data
);
