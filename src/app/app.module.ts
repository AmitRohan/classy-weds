import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NetworkManagerService } from './network-manager.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';
import {AppNavBarComponent} from "./app-nav-bar/app-nav-bar.component";
import {ProductsModule} from "./products/products.module";
import {AppFooterComponent} from "./app-footer/app-footer.component";
import { ContactUsModule } from './contact-us/contactUs.module';


@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule,
    ContactUsModule,
    HttpClientModule,
  ],
  providers: [NetworkManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
