import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    StateModule
  ]
})
export class CoreModule { }
