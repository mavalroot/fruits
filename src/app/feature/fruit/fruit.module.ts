import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitRoutingModule } from './fruit-routing.module';
import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    AddComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FruitRoutingModule
  ]
})
export class FruitModule { }
