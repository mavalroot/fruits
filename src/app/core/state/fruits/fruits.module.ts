import { NgModule } from '@angular/core';
import { fruitsFeature } from './+states/fruits.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FruitsEffects } from './+states/fruits.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fruitsFeature),
    EffectsModule.forFeature([FruitsEffects]),
  ],
})
export class FruitsModule {}
