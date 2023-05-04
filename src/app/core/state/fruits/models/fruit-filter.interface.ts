export interface FruitFilter {
  field: FruitSearchValuesEnum;
  value: number | string;
}

export enum FruitSearchValuesEnum {
  order,
  family,
  genus,
}
