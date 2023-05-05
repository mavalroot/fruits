import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatProgressSpinnerModule],
  templateUrl: './loading-dialog.component.html',
})
export class LoadingDialogComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<LoadingDialogComponent>
  ) {}
}
