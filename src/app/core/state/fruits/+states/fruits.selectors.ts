import { createSelector } from '@ngrx/store';
import { fruitsFeature } from './fruits.reducer';

const { selectFruitsState } = fruitsFeature;

export const selectFruits = createSelector(
  selectFruitsState,
  ({ data }) => data
);

export const selectPagination = createSelector(
  selectFruitsState,
  ({ pagination }) => pagination
);

export const selectFilter = createSelector(
  selectFruitsState,
  ({ filter }) => filter
);

export const selectFruitsPageViewModel = createSelector(
  selectFruits,
  selectPagination,
  selectFilter,
  (data, pagination, filter) => ({ data, pagination, filter })
);
