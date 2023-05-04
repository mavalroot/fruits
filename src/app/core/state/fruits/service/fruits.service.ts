import { Injectable } from '@angular/core';
import { Fruit } from '@app/core/models/fruit.interface';
import { Observable } from 'rxjs';
import { FruitFilter } from '../models/fruit-filter.interface';
import { isObjectEmpty } from '@app/core/utils/object.utils';
import { HttpClient } from '@angular/common/http';

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
}
