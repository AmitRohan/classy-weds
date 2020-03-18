import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('app/home/home.module').then(m => m.HomeModule),
    },{
        path: 'products',
        loadChildren: () => import('app/products/products.module').then(m => m.ProductsModule),
    }
    ,{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
