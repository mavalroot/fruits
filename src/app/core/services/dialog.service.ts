import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from '@app/shared/components/error-dialog/error-dialog.component';
import { LoadingDialogComponent } from '@app/shared/components/loading-dialog/loading-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private loadingRef: MatDialogRef<LoadingDialogComponent> | undefined;

  constructor(private readonly dialog: MatDialog) {}

  public startLoading(): void {
    this.loadingRef = this.dialog.open(LoadingDialogComponent, {
      disableClose: true,
    });
  }

  public stopLoading(): void {
    if (this.loadingRef) {
      this.loadingRef.close();
    }
  }

  public openError(message: string): void {
    this.dialog.open(ErrorDialogComponent, {
      disableClose: true,
      data: {
        message,
      },
    });
  }

  public openConfirm(title: string, message: string): void {
    this.dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      data: {
        title,
        message,
      },
    });
  }
}
