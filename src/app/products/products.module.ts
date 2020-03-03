import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsService } from './products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HolderComponent} from "./holder/holder.component";
import {ServicesComponent} from "./services/services.component";
import {HeaderComponent} from "./header/header.component";
import {ServicesListComponent} from "./services-list/services-list.component";
import {StepsComponent} from "./steps/steps.component";
import {WhyChooseUsComponent} from "./why-choose-us/why-choose-us.component";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [HolderComponent, ServicesComponent, HeaderComponent, ServicesListComponent, StepsComponent, WhyChooseUsComponent],
    providers: [ProductsService]
})
export class ProductsModule { }
