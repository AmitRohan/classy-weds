import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HolderComponent} from "./holder/holder.component";

const routes: Routes = [
    {
        path: '',
        component:  HolderComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
