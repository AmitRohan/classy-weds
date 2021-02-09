import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnChanges, EventEmitter, Output} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductModel, ProductKnownForStatus, ContactUsBody, ReviewBody } from '../products.types';

declare const $: any;

@Component({
  selector: 'app-home-products-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit , AfterViewInit , OnChanges , AfterContentChecked {
  
  @Input() hasRequestedCallback = false;
  @Input() selectedService: string = '';
  @Input() selectedProductDetail: ProductModel = null;
  @Output() onContactUsClicked = new EventEmitter<ContactUsBody>();
  @Output() onAddReviewClicked = new EventEmitter<ReviewBody>();


  makeProductKnownForStatus(title: string): ProductKnownForStatus{
    return {
      title : title,
      selected : false
    }
  }

  defaultRatingStarts:Array<String> = ['apdgrs-unselected','apdgrs-unselected','apdgrs-unselected','apdgrs-unselected','apdgrs-unselected']
  defaultProductKnownForStatus: Array<ProductKnownForStatus> = [
    this.makeProductKnownForStatus('Value for Money'),
    this.makeProductKnownForStatus('Amazing Food'),
    this.makeProductKnownForStatus('Hospitality'),
    this.makeProductKnownForStatus('Multi Cuisine'),
    this.makeProductKnownForStatus('Service'),
    this.makeProductKnownForStatus('Modern Decor'),
    this.makeProductKnownForStatus('Amazing Host'),
    this.makeProductKnownForStatus('Royal Theme'),
    this.makeProductKnownForStatus('Beautiful Banquet')

  ]

  reviewProductKnownForStatus: Array<ProductKnownForStatus>;
  apdgrs:Array<String>;
  canGiveNewReview: boolean;
  selectedPhotoUrl = ''

  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    $('#productImageShowcase').on('hide.bs.modal', function (event) {
       this.selectedPhotoUrl = ''
    })
    this.resetProductKnownForStatus()
    this.resetRatingStarts();
  }

  ngAfterContentChecked(): void {
    
  }

  ngOnChanges(changes){
    this.canGiveNewReview = false    
    this.resetProductKnownForStatus()
    this.resetRatingStarts();
  }

  enableNewRatingSection(){
    this.canGiveNewReview = true;
  }

  newProductReview = ""
  submitNewReview(){
    var tags =
          this.reviewProductKnownForStatus
            .filter( _ => _.selected)  
            .map( _ => _.title)
    var rating = this.apdgrs.filter( _ => _ == 'apdgrs-selected').length
    
    
    this.newProductReview = "";
    this.canGiveNewReview = false;
    this.resetProductKnownForStatus()
    this.resetRatingStarts();

    var reviewBody = {
      rating 
      ,tags
      ,user_id : 11
      , review : this.newProductReview
    }
    this.onAddReviewClicked.emit(reviewBody);
  }

  resetRatingStarts(){
    this.apdgrs = this.defaultRatingStarts;
    this.apdgrs = this.apdgrs.map( _ => 'apdgrs-unselected')
  }

  resetProductKnownForStatus(){
    this.reviewProductKnownForStatus = this.defaultProductKnownForStatus;
    this.reviewProductKnownForStatus = this.reviewProductKnownForStatus.map(_productKnownForStatus => Object.assign( _productKnownForStatus,{ selected : false}) )
  }

  loadPrevious(){
    var toGoTo = this.selectedIndex - 1;
    if(toGoTo >= 0 && toGoTo < this.selectedProductDetail.photos.length){
      this.selectedPhotoUrl = this.selectedProductDetail.photos[toGoTo]
      this.selectedIndex--;
    }
    
  }

  loadNext(){
    var toGoTo = this.selectedIndex + 1;
    if(toGoTo >= 0 && toGoTo < this.selectedProductDetail.photos.length){
      this.selectedPhotoUrl = this.selectedProductDetail.photos[toGoTo]
      this.selectedIndex++;
    }
  }
  
  selectedIndex = 0;

  showImage(selectedIndex){
    this.selectedIndex = selectedIndex;
    this.selectedPhotoUrl = this.selectedProductDetail.photos[selectedIndex]
    
  }

  selectProductKnownStatus(productKnownForStatus: ProductKnownForStatus,status:boolean){
    var _reviewProductKnownForStatus = this.reviewProductKnownForStatus.map( _productKnownForStatus => {
      if(productKnownForStatus.title == _productKnownForStatus.title){
         return Object.assign( _productKnownForStatus,{ selected : status})
      }else {
        return _productKnownForStatus;
      }
    })
    this.reviewProductKnownForStatus = _reviewProductKnownForStatus
  }

  getBestDealClicked(){    
    document.getElementById("getBestDeal").click();
  }

  getReviewAtDate(time){
    let _date = (new Date(time));
    let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];
    let day = _date.getDate();

    let monthIndex = _date.getMonth();
    let monthName = monthNames[monthIndex];
    
    let year = _date.getFullYear();
    
    return day + " " + monthName + " " + year;  
  }

  getPriceText(price) : string{
    return price
            ? price + " INR"
            : "N/A"
  }

  selectStarTill(index: number){
    var x = document.getElementsByClassName('app-product-details-give-rating-stars')[0];
    var _index = 0;
    while (_index < 5) {
      if(_index < index){
        this.apdgrs[_index] = 'apdgrs-selected'
      }else{
        this.apdgrs[_index] = 'apdgrs-unselected'
      }
      _index++; 
    }
  }

  getStarArray(rating:number): Array<string>{
    let startArray=[];
    let _i=1;
    if(rating > 5){
      rating = 5;
    }
    while(_i<rating){
      startArray.push('fa fa-star apdgrs-selected')
      _i++
    }
    if(_i > rating){
      startArray.push('fa fa-star-half apdgrs-selected')  
      _i++;
    }
    while(_i<6){
      startArray.push('fa fa-star apdgrs-unselected')
      _i++
    }
    return startArray;
  }

  getWidthPercentage(count:number ,fromArray:Array<number>):number{
     
    let width=0;
    let _maxCount = fromArray.reduce(function(a, b) {
      return Math.max(a, b);
    });
    if(_maxCount!=0)
      width = ( 100* count/_maxCount);    
      return width
  }

  getCallbackName = ""
  getCallbackNumber = ""

  getCallback(){
    if((this.getCallbackNumber || "").trim().length < 10){
      alert("Please enter a 10 digit number.")
      return;
    }

    if((this.getCallbackName || "").trim().length == 0){
      alert("Please enter your name.")
      return;
    }

    const contactUsBody = {
      phone : this.getCallbackNumber,
      enquiryType: "product info",
      productId: this.selectedProductDetail.productId,
      name: this.getCallbackName
    }
    this.onContactUsClicked.emit(contactUsBody)
  }
  
}
