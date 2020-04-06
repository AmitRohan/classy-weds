import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute} from '@angular/router';
import { ProductModel } from '../products.types';

import tippy, {animateFill} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';


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
    const datesFilter = document.getElementById('dates-1');
    const template = document.getElementById('template');
    const instance1 = this.initToolTip(datesFilter,template);
    
  }


  initToolTip(datesFilter,template){
    return tippy(datesFilter, {
      content: template.innerHTML,
      allowHTML: true,
      animation: 'fade',
      animateFill: true,
      interactive: true,
      plugins: [animateFill],
    });
  }

  ngOnChanges(changes){
    console.log("ProductsComponent : changes ", changes);
  }

  ngAfterContentChecked(): void {

  }
}
