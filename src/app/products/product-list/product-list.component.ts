import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute} from '@angular/router';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-services-service-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit , AfterViewInit , AfterContentChecked {
  serviceList: Array<any> = [
    {
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
    },{
      icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
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
