import { Component } from '@angular/core';
import { Fruit } from '@app/core/models';
import { FruitSelectors, FruitsActions } from '@app/core/state/fruits';
import { FruitFilter } from '@app/core/state/fruits/models/fruit-filter.interface';
import { FruitPagination } from '@app/core/state/fruits/models/fruit-pagination.interface';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public columns = ['name', 'genus', 'family', 'order'];
  public model$: Observable<{
    data: Fruit[];
    pagination: FruitPagination;
  }>;
  public displayedColumns = this.columns;

  private savedFilter: FruitFilter | undefined;

  constructor(private readonly store: Store) {
    this.model$ = this.store
      .select(FruitSelectors.selectFruitsPageViewModel)
      .pipe(
        tap(({ filter }) => {
          this.savedFilter = filter;
        })
      );
  }

  public getPaginationData(options: {
    pageIndex: number;
    pageSize: number;
  }): void {
    this.store.dispatch(
      FruitsActions.getFruits({
        filter: this.savedFilter,
        pagination: {
          page: options.pageIndex,
          size: options.pageSize,
        },
      })
    );
  }
}
