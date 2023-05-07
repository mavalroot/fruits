import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitRoutingModule } from './fruit-routing.module';
import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';
import { MatButtonModule } from '@angular/material/button';
import { FruitNotFoundComponent } from './components/fruit-not-found/fruit-not-found.component';
import { FruitDetailComponent } from './components/fruit-detail/fruit-detail.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { NutritionsDataComponent } from './components/nutritions-data/nutritions-data.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AddComponent,
    DetailComponent,
    FruitNotFoundComponent,
    FruitDetailComponent,
    NutritionsDataComponent,
  ],
  imports: [
    CommonModule,
    FruitRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule
  ],
})
export class FruitModule {}
