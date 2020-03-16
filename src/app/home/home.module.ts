import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeService } from './home.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HolderComponent} from "./holder/holder.component";
import {ServicesComponent} from "./services/services.component";
import {HeaderComponent} from "./header/header.component";
import {ServicesListComponent} from "./services-list/services-list.component";
import {StepsComponent} from "./steps/steps.component";
import {ContactUs} from "./contact-us/contact-us.component";
import {WhyChooseUsComponent} from "./why-choose-us/why-choose-us.component";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [HolderComponent, ContactUs ,ServicesComponent, HeaderComponent, ServicesListComponent, StepsComponent, WhyChooseUsComponent],
    providers: [HomeService]
})
export class HomeModule { }
