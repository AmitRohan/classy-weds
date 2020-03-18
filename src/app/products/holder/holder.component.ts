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
        index : 0,
        icon : `products_card_bgr.png`
        , name : `Card Info`
        , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
        , price : 7500
      },{
        index : 1,
        icon : `products_card_bgr.png`
      , name : `Card Info`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
      },{
        index : 2,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 3,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 4,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 5,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 6,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 7,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 8,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 9,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 10,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 11,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 12,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 13,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 14,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 15,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 16,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 17,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 18,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 19,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 20,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 21,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 22,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 23,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
        icon : `products_card_bgr.png`
            , name : `Card Info`
            , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
            , price : 7500
      },{
        index : 24,
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
