import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute} from '@angular/router';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-services-service-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesListComponent implements OnInit , AfterViewInit , AfterContentChecked {
  serviceList: Array<any> = [
    {
      icon : `service_photography.png`
      , name : `PHOTOGRAPHY`
    },{
      icon : `service_photography.png`
      , name : `Music and DJ`
    },{
      icon : `service_photography.png`
      , name : `Mehndi`
    },{
      icon : `service_photography.png`
      , name : `Makeup`
    },{
      icon : `service_photography.png`
      , name : `Venue`
    },{
      icon : `service_photography.png`
      , name : `Wedding Card`
    }
  ];


  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute
  ) { }

    ngOnInit() {

      }

      ngAfterViewInit(): void {

      }

    ngAfterContentChecked(): void {

      }
}
