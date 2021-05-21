import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './loading-indicator.component';
import { LoadingIndicatorService } from './loading-indicator.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoadingIndicatorComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [
    LoadingIndicatorService
  ]
})
export class LoadingIndicatorModule { }
