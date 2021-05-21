import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingIndicatorComponent } from './loading-indicator.component';
import { LoadingIndicatorParameters } from './model';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {
  private opened = false;
  private dialogRef: MatDialogRef<LoadingIndicatorComponent>;

  constructor(private dialog: MatDialog) { }

  show(message: string): void {
    let info: LoadingIndicatorParameters = { imagepath: null, message: message };
    if (!this.opened) {
      this.opened = true;
      this.dialogRef = this.dialog.open(LoadingIndicatorComponent, {
        data: info,
        maxHeight: "100%",
        maxWidth: "100%",
        disableClose: true,
        hasBackdrop: true
      });

      this.dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }

  hide() {
    this.dialogRef.close();
  }
}
