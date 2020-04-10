import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('app/home/home.module').then(m => m.HomeModule),
    },{
        path: 'services',
        loadChildren: () => import('app/products/products.module').then(m => m.ProductsModule),
    },{
        path: 'contct-us',
        loadChildren: () => import('app/products/contact-us.module').then(m => m.ContactUsModule),
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
