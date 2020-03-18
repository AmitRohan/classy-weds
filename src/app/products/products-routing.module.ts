import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HolderComponent} from "./holder/holder.component";

const routes: Routes = [
  {
    path: ':productId',
    component:  HolderComponent
  }, {
    path: '',
    component:  HolderComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
