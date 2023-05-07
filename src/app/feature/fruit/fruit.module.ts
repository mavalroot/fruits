import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitRoutingModule } from './fruit-routing.module';
import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';
import { MatButtonModule } from '@angular/material/button';
import { FruitNotFoundComponent } from './components/fruit-not-found/fruit-not-found.component';
import { FruitDetailComponent } from './components/fruit-detail/fruit-detail.component';


@NgModule({
  declarations: [
    AddComponent,
    DetailComponent,
    FruitNotFoundComponent,
    FruitDetailComponent,
  ],
  imports: [
    CommonModule,
    FruitRoutingModule,
    MatButtonModule,
  ]
})
export class FruitModule { }
