import { Injectable } from '@angular/core';
import { Fruit } from '@app/core/models/fruit.interface';
import { Observable } from 'rxjs';
import { FruitFilter } from '../models/fruit-filter.interface';
import { isObjectEmpty } from '@app/core/utils/object.utils';
import { HttpClient } from '@angular/common/http';
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  FruitPagination,
  PAGE_SIZE_OPTIONS,
} from '../models/fruit-pagination.interface';

@Injectable({
  providedIn: 'root',
})
export class FruitsService {
  constructor(private readonly httpClient: HttpClient) {}

  public getFruits(filter: FruitFilter | undefined): Observable<Fruit[]> {
    let url = '/api/fruit';

    if (filter && !isObjectEmpty(filter)) {
      url += `/${filter.field}/${filter.value}`;
    } else {
      url += '/all';
    }

    return this.httpClient.get<Fruit[]>(url);
  }

  public getPagination(
    data: Fruit[],
    pagination?: Partial<FruitPagination>
  ): FruitPagination {
    return {
      length: data.length,
      size: pagination?.size || DEFAULT_PAGE_SIZE,
      page: pagination?.page || DEFAULT_PAGE,
      pageSizeOptions: PAGE_SIZE_OPTIONS,
    };
  }

  public getPaginatedData(data: Fruit[], pagination: FruitPagination): Fruit[] {
    const startingIndex = pagination.page * pagination.size,
      endingIndex = startingIndex + pagination.size;

    let index = 0;

    return data.filter((_d) => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }
}
