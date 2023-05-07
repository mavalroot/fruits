import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StateModule } from './state/state.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';


const EXPORT_IMPORT = [
  NavbarComponent
];
@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    StateModule,
    MatDialogModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    FormlyMaterialModule,
    ...EXPORT_IMPORT
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    MatDialog,
  ],
  exports: [...EXPORT_IMPORT]
})
export class CoreModule { }
