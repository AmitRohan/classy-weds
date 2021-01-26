import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsService } from './products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HolderComponent} from "./holder/holder.component";
import {ProductsComponent} from "./products/products.component";
import {HeaderComponent} from "./header/header.component";
import {ProductListComponent} from "./product-list/product-list.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  declarations: [HolderComponent, ProductsComponent, HeaderComponent, ProductListComponent, ProductDetailComponent],
    providers: [ProductsService]
})
export class ProductsModule { }
