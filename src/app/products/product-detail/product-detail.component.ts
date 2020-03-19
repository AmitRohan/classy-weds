import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductModel } from '../products.types';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-products-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit , AfterViewInit , OnChanges , AfterContentChecked {
  @Input() selectedProductDetail: ProductModel = null;
  
  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    
  }

  ngAfterContentChecked(): void {

  }

  ngOnChanges(changes){
    console.log("ProductDetailComponent : changes ", changes);
  }
}
