import { DisplayData } from '../models/display-data.interface';

export const isObjectEmpty = (obj: Record<string, any>): boolean => {
  return Object.keys(obj).length === 0;
};

export const isObject = (value: any): boolean => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

export const objectToDisplayData = (
  obj: Record<string, any>
): DisplayData[] => {
  return Object.entries(obj).map(([label, value]) => {
    if (isObject(value)) {
      return {
        label,
        children: objectToDisplayData(value),
      };
    }
    return {
      label,
      value,
    };
  });
};
