import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FilterComponent } from './components/filter/filter.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [ListComponent, FilterComponent, TableComponent],
  imports: [CommonModule, FruitsRoutingModule],
})
export class FruitsModule {}
