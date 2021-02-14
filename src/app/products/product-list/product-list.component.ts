import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductModel } from '../products.types';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit , AfterViewInit , AfterContentChecked , OnChanges{
  
  @Input() selectedService: string = '';
  @Input() availableProducts: Array<ProductModel> = [];
  @Input() selectedProductDetail: ProductModel = null;
  tmpList = ''
  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {

  }

  ngOnChanges(changes){

    if(changes.selectedProductDetail && changes.selectedProductDetail.currentValue){
      this.fixScroll();
      
    }
  }

  ngAfterViewInit(): void {
   
  }

  ngAfterContentChecked(): void {

  }

  selectItem(item:ProductModel){
    this.router.navigateByUrl('/services/' +this.selectedService +'/'+ item.productId);
  }

  getClassToUse(itemSelected) : string{
    return itemSelected == null
          ? "col-lg-4 col-md-6 col-sm-12 half-parent-height p-0 app-products-card-container"
          : "col-lg-6 col-md-6 col-sm-12 half-parent-height p-0 app-products-card-container";
  }

  getPriceText(price: string) : string{
    return price
            ? price + " INR"
            : "N/A"
  }

  getDescriptionText(longDesc: string = "") : string{
    return longDesc.length > 200
        ? longDesc.substring(0,200) + "..."
        : longDesc
  }

  getStarArray(rating:number): Array<string>{
    if(rating > 5){
      rating = 5;
    }
    let startArray=[];
    let _i=1;
    while(_i<rating){
      startArray.push('fa fa-star dib')
      _i++
    }
    if(_i > rating){
      startArray.push('fa fa-star-half dib')  
      _i++;
    }
    while(_i<6){
      startArray.push('fa fa-star unrated dib')
      _i++
    }
    return startArray;
  }

  fixScroll(){
    this.availableProducts.forEach((element,index) => {
      if(element.productId == this.selectedProductDetail.productId){
        setTimeout(()=>{
          var checkIfItIsSelected = document.getElementById('checkIfItIsSelected'+index);
          
          checkIfItIsSelected.scrollIntoView({
            behavior: "smooth"
          })
        },500)  
      }
    });      
  }
}
