import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute} from '@angular/router';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HolderComponent implements OnInit , AfterViewInit , AfterContentChecked {
  productId = '';
  productList: Array<any> = [
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
        this.productId = (this.route.snapshot.paramMap.get('productId') || "");
        
      }

      ngAfterViewInit(): void {

      }

    ngAfterContentChecked(): void {

      }
}
