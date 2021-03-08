import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnDestroy, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { ProductModel , AboutContent, PackageAvailable, ProductReview, Review, ContactUsBody, ReviewBody} from '../products.types';


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
  
  public availableProducts: Array<ProductModel> = [];
  public selectedProductDetail: ProductModel = null;
  public selectedService: number = -1;
  private previousSelectedService: number = -1;
  public hasRequestedCallback = false;
  public showLoader = false
  private shouldFetchDetails = false
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


        const serviceName : number = parseInt(route.snapshot.paramMap.get('serviceName') || '-1');
        const productId = (route.snapshot.paramMap.get('productId') || "-1");
        
        this.selectedService = serviceName;
        this.showLoader = true;
      
        if(productId && productId!= '-1'){
          this.dashboardData.fetchProductDetails(productId,(resp,err)=>{
            if(err){
              return;
            }
            this.hasRequestedCallback= false;
            this.selectedProductDetail = resp[0];

            this.updateReviewList();

          })
        }
        if(this.previousSelectedService != this.selectedService){
          this.dashboardData.fetchProductList(serviceName,(resp,err)=>{
            this.showLoader = false;
            if(err){
              return;
            }
            this.availableProducts = resp;
          })
          this.previousSelectedService = this.selectedService;
        }
        
        
        
  }
  
  ngOnChanges(changes){
    
  }
 
  ngOnInit() {
    this.checkInRoute(this.route);
      
  }

  ngAfterViewInit(){
    
    
  }

     
  ngAfterContentChecked(): void {

  }

  onAddReviewClicked(reviewBody : ReviewBody){
    this.dashboardData.addReviewForProduct(
      this.selectedProductDetail.productId
      , reviewBody
      , (resp,err)=>{
        if(err){
          alert("oops")
          return;
        }
        this.updateReviewList();
      }
      )
  }

  onContactUsClicked(contactUsBody: ContactUsBody){
    this.dashboardData.requestCallBack(
        contactUsBody
        , (resp,err)=>{
          if(err){
            alert("oops")
            return;
          }
          this.hasRequestedCallback=true;

        }
    )
  }

  updateReviewList(){
    this.dashboardData.fetchReviewListForProduct(this.selectedProductDetail.productId,(resp,err)=>{
      this.showLoader = false;
      if(err){
        return;
      }
      this.selectedProductDetail.reviewResponse.reviewList = resp;

      
    })
  }
}