import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FailureComponent } from './failure/failure.component';
import { RegisterComponent } from './register/register.component';
import { SucessComponent } from './sucess/sucess.component';

const routes: Routes = [
  {
    path: "", component: RegisterComponent,

  },
  {
    path: "success", component: SucessComponent
  },
  {
    path: "failure", component: FailureComponent
  },
  {
    path: "*", component: RegisterComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
