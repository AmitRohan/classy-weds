import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './contactUs-routing.module';

import { ContactUsService } from './contactUs.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HolderComponent} from "./holder/holder.component";
import {ContactUs} from "./contact-us/contact-us.component";
import { ContactUsHeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [HolderComponent, ContactUsHeaderComponent ,ContactUs],
    providers: [ContactUsService]
})
export class ContactUsModule { }
