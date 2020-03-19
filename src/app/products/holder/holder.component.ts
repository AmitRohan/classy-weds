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
        , name : `The Leela Ambience Convention Hotel`
        , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
        , price : 7500
      },{
        index : 1,
        icon : `products_card_bgr.png`
      , name : `The Leela Ambience Convention Hotel`
      , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
      , price : 7500
      },{
        index : 2,
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
