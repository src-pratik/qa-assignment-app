import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css']
})
export class FailureComponent implements OnInit {
  code;
  constructor() { this.code = Math.floor(Math.random() * 10000); }

  ngOnInit(): void {
  }

}
