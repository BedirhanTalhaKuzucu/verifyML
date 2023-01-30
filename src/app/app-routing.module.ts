import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelDetailsComponent } from './model-details/model-details.component';

const routes: Routes = [
  {path:"",  component: ModelDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
