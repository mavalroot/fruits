import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { DialogService } from '../services/dialog.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  counter: number = 0;

  constructor(private readonly dialog: DialogService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.counter++;
    this.dialog.startLoading();

    return next.handle(request).pipe(finalize(() => {
      this.counter--;

      if (this.counter === 0) {
        this.dialog.stopLoading();
      }
    }));
  }
}
