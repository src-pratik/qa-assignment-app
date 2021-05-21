import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingIndicatorParameters } from './model';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent implements OnInit {

  imagepath: string = null
  message: string = null

  constructor(@Inject(MAT_DIALOG_DATA) public data: LoadingIndicatorParameters) {
    this.imagepath = data.imagepath;
    this.message = data.message;
  }

  ngOnInit(): void {
  }

}
