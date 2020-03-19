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
        index : 0
        , icon : `products_card_bgr.png`
        , name : `The Leela Ambience Convention Hotel`
        , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
        , landmark : 'Bangalore Central'
        , address : 'The Leela Ambience Convention Hotel, MG Road,Bangalore- 560092'
        , reviewsCount : 18
        , rating : 3.7
        , price : 7500
      },{
        index : 1
        , icon : `products_card_bgr.png`
        , name : `The Vanila Convention Hotel`
        , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
        , landmark : 'Bangalore North'
        , address : 'The Vanila Ambience Convention Hotel, Vanila Road,Bangalore- 560092'
        , reviewsCount : 180000
        , rating : 4.9
        , price : 5500
      },{
        index : 2,
        icon : `products_card_bgr.png`
        , name : `Brave Heart`
        , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
        , landmark : 'South Bangalore Central'
        , address : 'The Brave Heart MG Hotel, Convention Road,Bangalore- 560092'
        , reviewsCount : 5
        , rating : 5
        , price : 9000
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
