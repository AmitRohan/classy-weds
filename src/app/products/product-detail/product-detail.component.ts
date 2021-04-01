import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
  OnChanges,
  EventEmitter,
  Output,
  HostListener
} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductModel, ProductKnownForStatus, ContactUsBody, ReviewBody } from '../products.types';

declare const $: any;
@Component({
  selector: 'app-home-products-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '(document:keyup)': 'checkIfArrowKeysClicked($event)'
  }
})
export class ProductDetailComponent implements OnInit , AfterViewInit , OnChanges {
  
  @Input() hasRequestedCallback = false;
  @Input() selectedService: string = '';
  @Input() selectedProductDetail: ProductModel = null;
  @Output() onContactUsClicked = new EventEmitter<ContactUsBody>();
  @Output() onAddReviewClicked = new EventEmitter<ReviewBody>();
  
  @ViewChild('holder',{ static : false}) holder  : ElementRef;
  @ViewChild('detailsCard',{ static : false}) detailsCard  : ElementRef;
  @ViewChild('prodImage',{ static : false}) prodImage  : ElementRef;
  @ViewChild('detailsCardContent',{ static : false}) detailsCardContent  : ElementRef;
  @ViewChild('detailsShowCase',{ static : false}) detailsShowCase  : ElementRef;


  
  
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

  ngOnChanges(changes){
    this.canGiveNewReview = false    
    this.resetProductKnownForStatus()
    this.resetRatingStarts();
    this.setUpScrollingBehaviours();

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
    
    var reviewBody = {
      rating 
      ,tags
      ,user_id : 11
      , review : this.newProductReview
    }

    this.newProductReview = "";
    this.canGiveNewReview = false;
    this.resetProductKnownForStatus()
    this.resetRatingStarts();

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

  /*
  * Check if 
  *     1. selectedProductDetail had some data i.e. in UI the card details is presnt
  *     2. If a image is selected
  *  to intercept the desired keyboard event
  *  and change image in the modal.
  */
  checkIfArrowKeysClicked(ev:KeyboardEvent) {
    if(this.selectedProductDetail != null
      && this.selectedPhotoUrl != ''){
      switch(ev.key){
        case 'ArrowRight' :
          ev.preventDefault();
          this.loadNext();
          break;
        case 'ArrowLeft' :
          ev.preventDefault();
          this.loadPrevious();
          break;
      }
    }
    
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

  getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
  }

  private static holderHeight : number;

  private static pinHolderAfter : number;
  private static detailsCardHeight : number;

  private static prodImageHeight : number;
  private static detailsCardContentHeight : number;

  private static offsetTop : number;
  private static endAfterScrolled : number;

  
  setUpScrollingBehaviours(){
    
    if(this.holder == null || this.holder.nativeElement == null){
      return;
    }
    ProductDetailComponent.detailsCardHeight = this.detailsCard.nativeElement.clientHeight
    
    ProductDetailComponent.prodImageHeight = this.prodImage.nativeElement.clientHeight

    ProductDetailComponent.detailsCardContentHeight = this.detailsCardContent.nativeElement.clientHeight

    
    ProductDetailComponent.offsetTop = this.getPosition(this.detailsCard.nativeElement).y;

    ProductDetailComponent.pinHolderAfter = this.getPosition(this.detailsCardContent.nativeElement).y;      
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){

    // return;

    var amtScrolled = $event.target.scrollingElement.scrollTop;
    
    if(this.holder == null || this.holder.nativeElement == null){
      return;
    }

   
    if( ProductDetailComponent.endAfterScrolled == null){
      ProductDetailComponent.holderHeight = this.holder.nativeElement.clientHeight
      ProductDetailComponent.endAfterScrolled =  this.holder.nativeElement.clientHeight - ProductDetailComponent.prodImageHeight + 40
      console.log(
        "\n 1. HolderHeight ",this.holder.nativeElement.clientHeight,
        "\n HolderHeight ",ProductDetailComponent.holderHeight,
        "\n DetailsCardHeight ",ProductDetailComponent.detailsCardHeight,
        "\n ProdImageHeight ",ProductDetailComponent.prodImageHeight,
        "\n OffsetTop ",ProductDetailComponent.offsetTop,
        "\n EndAfterScrolled ",ProductDetailComponent.endAfterScrolled,
      );
    }
    if(amtScrolled >= ProductDetailComponent.pinHolderAfter 
      
         && amtScrolled <= ProductDetailComponent.endAfterScrolled ){

          this.detailsCard.nativeElement.classList.add('fixToRight');
          this.detailsShowCase.nativeElement.classList.add('makeScrollable');

      // no need to capture if page is smaller then card
      // if(window.innerHeight < ProductDetailComponent.detailsCardHeight){
      //   this.detailsCard.nativeElement.style.bottom = "20px";
      // }else{
        this.detailsCard.nativeElement.style.top = '-' + ProductDetailComponent.prodImageHeight + "px";
      // }
      
    } else if(amtScrolled > ProductDetailComponent.endAfterScrolled ){
      const newPosition = ProductDetailComponent.holderHeight - amtScrolled - 40 - ProductDetailComponent.prodImageHeight
      console.log("a", newPosition );
      
      this.detailsCard.nativeElement.style.top = newPosition + "px";
    } else{
      this.detailsCard.nativeElement.classList.remove('fixToRight');
      this.detailsCard.nativeElement.style.top = "";
      this.detailsCard.nativeElement.style.bottom = "";

      this.detailsShowCase.nativeElement.classList.remove('makeScrollable');


    }
  }
  
}
