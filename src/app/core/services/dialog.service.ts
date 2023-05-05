import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingDialogComponent } from '@app/shared/components/loading-dialog/loading-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private loadingRef: MatDialogRef<LoadingDialogComponent> | undefined;

  constructor(private readonly dialog: MatDialog) { }

  public startLoading() {
    this.loadingRef = this.dialog.open(LoadingDialogComponent, {
      disableClose: true,
    });
  }

  public stopLoading() {
    if (this.loadingRef) {
      this.loadingRef.close();
    }
  }
}
