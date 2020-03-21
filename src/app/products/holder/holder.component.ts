import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnDestroy, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { ProductModel , AboutContent} from '../products.types';

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
  
  public sampleContent: Array<AboutContent> = [{
    title : 'Location'
    , description : 'The Leela Ambience Convention Hotel bears close proximity to Connaught Place and old Delhi monuments, can be easily accessed by roadways or metro rail, which makes it a much sought after venue in the city and easily accessible for your invitees.'
  },{
    title : 'Space Available'
    , description : 'Encased within two towers are 480 rooms and suites, two outdoor swimming pools, luxurious recreational facilities and specialty dining and wellness options. It boasts of a pillar-less ballroom of 25,000 sq.ft.; the hotel boasts of India’s largest convention space of 70,000 square feet. It is flanked by two beautifully designed outdoor patios, which provide an ideal setting for events.The hotel is well equipped to park up to 700 cars within its premises. The two business centers with nine elegantly furnished boardrooms & three meeting rooms further showcase its versatility in business and convention areas. '
  },{
    title : 'Facilities'
    , description : 'The Leela spoils its patrons with a choice of myriad cuisines through its 3 specialty restaurants, All Day Dine Café Knosh, Oriental Mei Kun & Indian Dilli 32, and a regally designed Cherry bar. Taking guest experience to a whole new level, the hotel provides a selection of wellbeing and relaxation offerings in one of the finest spas named Shanaya. The 480 rooms are luxuriously appointed, out of which 126 are twin bedded rooms (highest in the country) and 25 are suites. With minimum of 45 square meters of area, each room displays state of art technology with four fixture bathrooms.The restaurants are well equipped to cater to a gathering of above 600 guests simultaneously during breakfast. The caterers at The Leela garnish an exquisite menu, staff envelop the guests with gracious hospitality while their decorators set up a breathtakingly stunning decor for the celebration. In house Alcohol and an in house DJ can be arranged at the venue to make your guests inebriated enough and to hype up the fun quotient of your wedding.The Leela offers top-notch food service and a state-of-the-art sound system that will keep your guests dancing all night. The interiors are magnificent and the great hospitality will leave you and your guests in awe.'
  }]
  
  public availableProducts: Array<ProductModel> = [
      {
        index : 0
        , icon : `products_card_bgr.png`
        , name : `The Leela Ambience Convention Hotel`
        , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
        , intro : 'The Leela Ambience Convention Hotel, Delhi is an epitome of luxury with India’s best wedding facility and bears close proximity to Connaught Place and old Delhi monuments. This luxe property comes with an in-house event management team that will take care of all your individual needs and requirements so that you enjoy your day hassle free.'
        , landmark : 'Bangalore Central'
        , address : 'The Leela Ambience Convention Hotel, MG Road,Bangalore- 560092'
        , reviewsCount : 18
        , rating : 3.7
        , price : 7500
        , aboutContent : this.sampleContent
      },{
        index : 1
        , icon : `products_card_bgr.png`
        , name : `The Vanila Convention Hotel`
        , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
        , intro : 'The Leela Ambience Convention Hotel, Delhi is an epitome of luxury with India’s best wedding facility and bears close proximity to Connaught Place and old Delhi monuments. This luxe property comes with an in-house event management team that will take care of all your individual needs and requirements so that you enjoy your day hassle free.'
        , landmark : 'Bangalore North'
        , address : 'The Vanila Ambience Convention Hotel, Vanila Road,Bangalore- 560092'
        , reviewsCount : 180000
        , rating : 4.9
        , price : 5500
        , aboutContent : this.sampleContent
      },{
        index : 2,
        icon : `products_card_bgr.png`
        , name : `Brave Heart`
        , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
        , intro : 'The Leela Ambience Convention Hotel, Delhi is an epitome of luxury with India’s best wedding facility and bears close proximity to Connaught Place and old Delhi monuments. This luxe property comes with an in-house event management team that will take care of all your individual needs and requirements so that you enjoy your day hassle free.'
        , landmark : 'South Bangalore Central'
        , address : 'The Brave Heart MG Hotel, Convention Road,Bangalore- 560092'
        , reviewsCount : 5
        , rating : 5
        , price : 9000
        , aboutContent : this.sampleContent
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
