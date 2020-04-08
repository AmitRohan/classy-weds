import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductModel, ProductKnownForStatus } from '../products.types';

declare const $: any;

@Component({
  selector: 'app-home-products-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit , AfterViewInit , OnChanges , AfterContentChecked {
  @Input() selectedService: string = '';
  @Input() selectedProductDetail: ProductModel = null;


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

  submitNewReview(){
    this.canGiveNewReview = false;
    this.resetProductKnownForStatus()
    this.resetRatingStarts();
  }

  resetRatingStarts(){
    this.apdgrs = this.defaultRatingStarts;
    this.apdgrs = this.apdgrs.map( _ => 'apdgrs-unselected')
  }

  resetProductKnownForStatus(){
    this.reviewProductKnownForStatus = this.defaultProductKnownForStatus;
    this.reviewProductKnownForStatus = this.reviewProductKnownForStatus.map(_productKnownForStatus => Object.assign( _productKnownForStatus,{ selected : false}) )
  }

  showImage(imageUrl){
    this.selectedPhotoUrl = imageUrl;
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
    while(_i<rating){
      startArray.push('fa fa-star apdgrs-selected')
      _i++
    }
    if(_i > rating){
      startArray.push('fa fa-star-half-o apdgrs-selected')  
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
  
}
