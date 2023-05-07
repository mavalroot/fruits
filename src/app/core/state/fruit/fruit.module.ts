import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FruitEffects } from './+states/fruit.effects';
import { fruitFeature } from './+states/fruit.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fruitFeature),
    EffectsModule.forFeature([FruitEffects]),
  ],
})
export class FruitModule {}
