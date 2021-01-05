import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnDestroy, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { ProductModel , AboutContent, PackageAvailable, ProductReview, Review} from '../products.types';


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

  sampleReview(visible): Review{
    return {
      from : 'Deeksha',
      review : 'Had my wedding here and the venue and the service were both exceptional. We had a big gathering and the venue was perfect for us. Highly recommended',
      time : 4,
      rating : 4.0,
      tags : [
        'Value for Money',
        'Beautiful Banquet',
        'Amazing food'
      ],
      replyAvailale : visible,
      replyFrom : 'The Leela Ambience Convention Hotel',
      reply : 'Thank you for reviewing us :D'
    }
  }

  sampleReviewList: Array<Review> = [this.sampleReview(true),this.sampleReview(false),this.sampleReview(true),this.sampleReview(true),this.sampleReview(true),this.sampleReview(true) ]
  
  sampleReviews: ProductReview = {
    socialReview : 'High-end Vietnamese dishes & cocktails are provided at this grand ultramodern restaurant',
    socialReviewSource : 'Google',
    reviewHighlights : ['grand decoration','amazing caterers','friendly hospitality'],
    starCounts : [0, 0, 3, 5, 4],
    reviewList : this.sampleReviewList
  }
  
  public packageAvailable : Array<PackageAvailable> = [{
    title : 'Saphire'
    , description : '225 Seating & 400 Floating'
    , price : 7500
  }, {
    title : 'Saphire 2'
    , description : '225 Seating & 400 Floating'
    , price : 7500
  }, {
    title : 'Saphire 3'
    , description : '225 Seating & 400 Floating'
    , price : 7500
  }, {
    title : 'Saphire 4'
    , description : '225 Seating & 400 Floating'
    , price : 7500
  }, {
    title : 'Saphire 5'
    , description : '225 Seating & 400 Floating'
    , price : 7500
  }]
  
  public availableProducts: Array<ProductModel> = [];
  public selectedProductDetail: ProductModel = null;
  public selectedService: string='';
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

    
        const serviceName = (route.snapshot.paramMap.get('serviceName') || "-1");
        const productId = (route.snapshot.paramMap.get('productId') || "-1");
        
        this.selectedService = serviceName;
        this.dashboardData.fetchProductList('all',(resp,err)=>{
          if(err){
            return;
          }
          this.availableProducts = resp;
        })

        if(productId){
          this.dashboardData.fetchProductDetails(productId,(resp,err)=>{
            if(err){
              return;
            }
            this.selectedProductDetail = resp[0];
          })
        }
        
        
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