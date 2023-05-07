import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { CreateComponent } from './pages/create/create.component';

const routes: Routes = [
  { path: '', redirectTo: 'create',  pathMatch: 'full' },
  { path: 'create', component: CreateComponent },
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
