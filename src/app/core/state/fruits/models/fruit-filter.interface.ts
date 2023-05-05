export interface FruitFilter {
  field: FruitSearchValuesEnum;
  value: number | string;
}

export enum FruitSearchValuesEnum {
  order = 'order',
  family = 'family',
  genus = 'genus',
}
