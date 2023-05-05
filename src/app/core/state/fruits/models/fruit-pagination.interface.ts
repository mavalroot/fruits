export interface FruitPagination {
  length: number;
  page: number;
  size: number;
  pageSizeOptions: number[];
}

export const PAGE_SIZE_OPTIONS = [5, 10, 25];
export const DEFAULT_PAGE_SIZE = 5;
export const DEFAULT_PAGE = 0;
