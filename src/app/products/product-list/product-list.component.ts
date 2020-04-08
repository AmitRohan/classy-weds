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
    console.log("ProductListComponent : changes ", changes);
  }

  ngAfterViewInit(): void {
   
  }

  ngAfterContentChecked(): void {

  }

  selectItem(item:ProductModel){
    this.router.navigateByUrl('/services/' +this.selectedService +'/'+ item.index);
  }

  getStarArray(rating:number): Array<string>{
    let startArray=[];
    let _i=1;
    while(_i<rating){
      startArray.push('fa fa-star dib')
      _i++
    }
    if(_i > rating){
      startArray.push('fa fa-star-half-o dib')  
      _i++;
    }
    while(_i<6){
      startArray.push('fa fa-star unrated dib')
      _i++
    }
    return startArray;
  }
}
