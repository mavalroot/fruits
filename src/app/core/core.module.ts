import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StateModule } from './state/state.module';
import { NavbarComponent } from './components/navbar/navbar.component';


const EXPORT_IMPORT = [
  NavbarComponent
];
@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    StateModule,
    ...EXPORT_IMPORT
  ],
  exports: EXPORT_IMPORT
})
export class CoreModule { }
