import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  { path: '', redirectTo: 'add',  pathMatch: 'full' },
  { path: 'add', component: AddComponent },
  {
    path: ':fruit',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitRoutingModule {}
