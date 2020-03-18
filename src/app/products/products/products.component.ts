import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute} from '@angular/router';

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
export class ProductsComponent implements OnInit , AfterViewInit , AfterContentChecked {
  @Input() productList: Array<any>;
  @Input() selectedProduct: string;
  
  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {

  }

  ngAfterContentChecked(): void {

  }
}
