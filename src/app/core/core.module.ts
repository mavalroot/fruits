import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StateModule } from './state/state.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


const EXPORT_IMPORT = [
  NavbarComponent
];
@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    StateModule,
    MatDialogModule,
    ...EXPORT_IMPORT
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    MatDialog,
  ],
  exports: [...EXPORT_IMPORT]
})
export class CoreModule { }
