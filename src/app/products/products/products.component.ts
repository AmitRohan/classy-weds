import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute} from '@angular/router';
import { ProductModel } from '../products.types';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit , AfterViewInit , AfterContentChecked , OnChanges{
  @Input() availableProducts: Array<ProductModel> = [];
  @Input() selectedProductDetail: ProductModel = null;
  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes){
    console.log("ProductsComponent : changes ", changes);
  }

  ngAfterContentChecked(): void {

  }
}
