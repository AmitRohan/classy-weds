import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NetworkManagerService } from './network-manager.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';
import {AppNavBarComponent} from "./app-nav-bar/app-nav-bar.component";


@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [NetworkManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
