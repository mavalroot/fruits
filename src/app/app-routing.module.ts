import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fruits',
    pathMatch: 'full',
  },
  {
    path: 'fruits',
    loadChildren: () =>
      import('@feature/fruits/fruits.module').then(
        (module) => module.FruitsModule
      ),
  },
  {
    path: 'fruit',
    loadChildren: () =>
      import('@feature/fruit/fruit.module').then(
        (module) => module.FruitModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
