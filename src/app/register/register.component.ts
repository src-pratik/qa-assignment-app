import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingIndicatorService } from '../_shared/controls/loading-indicator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: string = "Register"
  model: any = {};
  submitted: boolean = false;

  countries = [
    { code: 1, value: "India" },
    { code: 2, value: "South Africa" },
    { code: 3, value: "Russia" }
  ]
  membership = [{ name: 'Premium', value: 1 }, { name: 'Basic', value: 2, }]

  communication = [
    { name: 'SMS', value: false, color: 'primary' },
    { name: 'Email', value: false, color: 'accent' },
    { name: 'Phone', value: false, color: 'warn' }
  ]

  constructor(private loader: LoadingIndicatorService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(frm) {

    this.loader.show("Processing your request");
    setTimeout(() => {
      this.loader.hide();

      if (Math.floor(Math.random() * 10) > 5)
        this.router.navigate(['success']);
      else
        this.router.navigate(['failure']);
    }, Math.floor(Math.random() * 10000));
  }

}