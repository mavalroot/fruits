import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FruitDetail } from '@app/core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  constructor(private readonly httpClient: HttpClient) {}

  public getDetail(name: string): Observable<FruitDetail> {
    return this.httpClient.get<FruitDetail>(`/api/fruit/${name.toLowerCase()}`);
  }

  public addFruit(data: FruitDetail): Observable<{ success: string }> {
    return this.httpClient.put<{ success: string }>('/api/fruit', data);
  }
}
