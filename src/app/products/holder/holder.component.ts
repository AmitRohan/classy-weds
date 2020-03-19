import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnDestroy, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { ProductModel } from '../products.types';

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
export class HolderComponent implements OnInit , AfterContentChecked , AfterViewInit, OnChanges{
  public availableProducts: Array<ProductModel> = [
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
  public selectedProductDetail: ProductModel = null;
  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute,
      private router: Router
  ) { 

    router.events.subscribe((val)=>{this.handleRouteChange(val,route)});
  }

  handleRouteChange(val,route: ActivatedRoute){    
    if(val instanceof NavigationEnd){
        this.checkInRoute(route);
      
    }
  } 

  checkInRoute(route: ActivatedRoute){
    this.selectedProductDetail = null;
        const productId = (route.snapshot.paramMap.get('productId') || "-1");
        let selectList = this.availableProducts.filter( item => item.index === Number(productId))
                            
        
        
        if(selectList.length == 0){
            selectList = [null];
        }
        this.selectedProductDetail = selectList[0]
  }
  
  ngOnChanges(changes){
    console.log("HolderComponent : changes ", changes);
  }
 
    ngOnInit() {
      this.checkInRoute(this.route);
        
      }

      ngAfterViewInit(){
        
       
      }

     
    ngAfterContentChecked(): void {

      }
}
