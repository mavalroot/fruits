import { FormlyFieldConfig } from '@ngx-formly/core';

export const formlyFields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'grid grid-cols-2 gap-2',
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'Name',
          placeholder: 'Enter fruit name',
          required: true,
          subscriptSizing: 'dynamic',
        },
      },
      {
        key: 'genus',
        type: 'input',
        props: {
          label: 'Genus',
          placeholder: 'Enter fruit genus',
          required: true,
          subscriptSizing: 'dynamic',
        },
      },
      {
        key: 'order',
        type: 'input',
        props: {
          label: 'Order',
          placeholder: 'Enter fruit order',
          required: true,
          subscriptSizing: 'dynamic',
        },
      },
      {
        key: 'family',
        type: 'input',
        props: {
          label: 'Family',
          placeholder: 'Enter fruit family',
          required: true,
          subscriptSizing: 'dynamic',
        },
      },
    ],
  },
  {
    fieldGroupClassName: 'grid grid-cols-3 gap-2 mt-6 pt-6 border-t-4',
    key: 'nutritions',
    fieldGroup: [
      {
        key: 'carbohydrates',
        type: 'input',
        props: {
          type: 'number',
          label: 'Carbohydrates',
          placeholder: 'Enter fruit carbohydrates (per 100gr)',
          required: true,
          subscriptSizing: 'dynamic',
        },
      },
      {
        key: 'protein',
        type: 'input',
        props: {
          type: 'number',
          label: 'Protein',
          placeholder: 'Enter fruit protein (per 100gr)',
          required: true,
          subscriptSizing: 'dynamic',
        },
      },
      {
        key: 'fatfat',
        type: 'input',
        props: {
          type: 'number',
          label: 'Fat',
          placeholder: 'Enter fruit fat (per 100gr)',
          required: true,
          subscriptSizing: 'dynamic',
        },
      },
      {
        key: 'calories',
        type: 'input',
        props: {
          type: 'number',
          label: 'Calories',
          placeholder: 'Enter fruit calories (per 100gr)',
          required: true,
          subscriptSizing: 'dynamic',
        },
      },
      {
        key: 'sugar',
        type: 'input',
        props: {
          type: 'number',
          label: 'Sugar',
          placeholder: 'Enter fruit sugar (per 100gr)',
          required: true,
          subscriptSizing: 'dynamic',
        },
      },
    ],
  },
];
