import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fruit } from '@app/core/models';
import { FruitsSelectors, FruitsActions } from '@app/core/state/fruits';
import { FruitFilter } from '@app/core/state/fruits/models/fruit-filter.interface';
import { FruitPagination } from '@app/core/state/fruits/models/fruit-pagination.interface';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  public columns = ['name', 'genus', 'family', 'order'];
  public model$: Observable<{
    data: Fruit[];
    pagination: FruitPagination;
  }>;
  public displayedColumns = [...this.columns, 'action'];

  private savedFilter: FruitFilter | undefined;

  constructor(private readonly store: Store, private readonly router: Router) {
    this.model$ = this.store
      .select(FruitsSelectors.selectFruitsPageViewModel)
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

  public goToDetail(element: Fruit) {
    if (element.name) {
      this.router.navigate([`/fruit/${element.name.toLowerCase()}`]);
    }
  }
}
