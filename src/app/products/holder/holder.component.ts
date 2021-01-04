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
  
  public availableProducts: Array<ProductModel> = [
      {
        productId : 0
        , icon : `products_card_bgr.png`
        , name : `The Leela Ambience Convention Hotel`
        , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
        , intro : 'The Leela Ambience Convention Hotel, Delhi is an epitome of luxury with India’s best wedding facility and bears close proximity to Connaught Place and old Delhi monuments. This luxe property comes with an in-house event management team that will take care of all your individual needs and requirements so that you enjoy your day hassle free.'
        , landmark : 'Bangalore Central'
        , address : 'The Leela Ambience Convention Hotel, MG Road,Bangalore- 560092'
        , reviewsCount : 18
        , rating : 3.7
        , price : 7500
        , reviewResponse : this.sampleReviews
        , aboutContent : this.sampleContent
        , packageAvailable : this.packageAvailable
        , photos : ['https://www.jakpost.travel/wimages/large/20-202100_love-couple-wallpaper-hd-1080p-free-download-53.jpg'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvJ7Po7TTKnm3nT7w_V1xlR8QVYC8rFCVmw42n2SCHNoWaqYP&s'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqZLnVXDQi_ar1m32RMp-wS39WMTA3fZEWG8M1E2S1DNHIQE-_'
                  ,'https://www.jakpost.travel/wimages/large/20-202100_love-couple-wallpaper-hd-1080p-free-download-53.jpg'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvJ7Po7TTKnm3nT7w_V1xlR8QVYC8rFCVmw42n2SCHNoWaqYP&s'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqZLnVXDQi_ar1m32RMp-wS39WMTA3fZEWG8M1E2S1DNHIQE-_'
                  ,'https://www.jakpost.travel/wimages/large/20-202100_love-couple-wallpaper-hd-1080p-free-download-53.jpg'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvJ7Po7TTKnm3nT7w_V1xlR8QVYC8rFCVmw42n2SCHNoWaqYP&s'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqZLnVXDQi_ar1m32RMp-wS39WMTA3fZEWG8M1E2S1DNHIQE-_'
                  ,'https://www.jakpost.travel/wimages/large/20-202100_love-couple-wallpaper-hd-1080p-free-download-53.jpg'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvJ7Po7TTKnm3nT7w_V1xlR8QVYC8rFCVmw42n2SCHNoWaqYP&s'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqZLnVXDQi_ar1m32RMp-wS39WMTA3fZEWG8M1E2S1DNHIQE-_'
                  ,'https://www.jakpost.travel/wimages/large/20-202100_love-couple-wallpaper-hd-1080p-free-download-53.jpg'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvJ7Po7TTKnm3nT7w_V1xlR8QVYC8rFCVmw42n2SCHNoWaqYP&s'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqZLnVXDQi_ar1m32RMp-wS39WMTA3fZEWG8M1E2S1DNHIQE-_'
                  ,'https://www.jakpost.travel/wimages/large/20-202100_love-couple-wallpaper-hd-1080p-free-download-53.jpg'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvJ7Po7TTKnm3nT7w_V1xlR8QVYC8rFCVmw42n2SCHNoWaqYP&s'
                  , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqZLnVXDQi_ar1m32RMp-wS39WMTA3fZEWG8M1E2S1DNHIQE-_'
                  ]
      },{
        productId : 1
        , icon : `products_card_bgr.png`
        , name : `The Vanila Convention Hotel`
        , description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…`
        , intro : 'The Leela Ambience Convention Hotel, Delhi is an epitome of luxury with India’s best wedding facility and bears close proximity to Connaught Place and old Delhi monuments. This luxe property comes with an in-house event management team that will take care of all your individual needs and requirements so that you enjoy your day hassle free.'
        , landmark : 'Bangalore North'
        , address : 'The Vanila Ambience Convention Hotel, Vanila Road,Bangalore- 560092'
        , reviewsCount : 180000
        , rating : 4.9
        , price : 5500
        , reviewResponse : this.sampleReviews
        , aboutContent : this.sampleContent
        , packageAvailable : this.packageAvailable
        , photos : []
      },{
        productId : 42,
        reviewResponse : this.sampleReviews,
        icon : `products_card_bgr.png`,
        "aboutContent": [
          {
              "description": "Dwarakapuri Kalyana Mantapa ISKCON Bangalore is located on Chord Road at a walking distance from Mahalakshmi Metro Station, a well-known place among the locals. Also, due to its well-connected location, it is easily accessible to your guests by multiple modes of commutation. If your outstation guests are arriving at the venue via plane, Iskcon Kalyana Mantapa, Rajajinagar, Bangalore is 34.2 km far from the Kempegowda International Airport, which takes around 45 minutes to drive down to the destination, via Bellary Road. The guests who are arriving at this place via train, Bangalore Railway Station which is around 5.9 km far from the venue, which is around 15 minutes' drive via Chord Road. ",
              "title": "Location"
          },
          {
              "description": "The Iskcon Kalyana Mantapa located in Rajajinagar, Bangalore has Banquet Halls, Mantapa / Convention Hall, Party Halls and Marriage Halls. Dwarkapuri can accommodate upto 450 guests in seating and 1000 guests in floating. Mathura can accommodate upto 150 guests in seating and 250 guests in floating. ",
              "title": "Space Summary"
          },
          {
              "description": "Overnight functions are not an issue at this venue, one can celebrate host night meanwhile staff make sure all the arrangements are done on point. There is ample car parking facility for more than 300 vehicles. Iskcon Marriage Hall offers a complimentary changing room to the host for their special day. It has 24 hours water and power Supply, security and housekeeping Services, advanced sound system trained technicians to operate the sound system. A fully equipped modern kitchen with steam-cooking, exhaust system, gas piping, imported vegetable cutting machines, freezers etc., caters to up to 2,000 guests a day.",
              "title": "Facilities"
          }
        ],
        "address": "ISKCON Bangalore, Hare Krishna Hill, Chord Rd, 1st R Block, Bengaluru, Karnataka 560010",
        "description": "Host your events at the Iskcon Kalyana Mantapa, Rajajinagar, Bangalore to make them a grand success. Dwarakapuri Kalyana Mantapa has spacious halls that can fit a large gathering for you to plan a traditional wedding ceremony and make joyful memories. The venue has well-maintained halls that are ideal for luxurious social gatherings, royal-theme weddings, and entertainment events. The staff at ISKCON Rajajinagar are professionals and skilled in their respective job, they make sure your function is executed well.",
        "intro": "null",
        "landmark": "ISKCON Temple",
        "name": "Iskcon Kalyan Mantapa",
        "packageAvailable": [
            {
                "description": null,
                "price": 500.0,
                "title": null
            }
        ],
        "photos": [
            "assets/photos/2020-08-25_08:29:37.782700_0.jpg",
            "assets/photos/2020-08-25_08:29:37.782786_1.jpg",
            "assets/photos/2020-08-25_08:29:37.783158_2.jpg",
            "assets/photos/2020-08-25_08:29:37.783234_3.jpg",
            "assets/photos/2020-08-25_08:29:37.783323_4.jpg"
        ],
        "price": 500.0,
        "rating": 3.0,
        "reviewsCount": 10
      }
      ];
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
        let selectList = this.availableProducts.filter( item => item.productId === Number(productId))
                            
        console.log(serviceName,productId);
        
        this.dashboardData.fetchProductList('all',(resp,err)=>{
          console.log(resp,err)
        })
        this.dashboardData.fetchProductDetails(254,(resp,err)=>{
          console.log(resp,err)
        })
        
        if(selectList.length == 0){
            selectList = [null];
        }
        this.selectedService = serviceName;
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
