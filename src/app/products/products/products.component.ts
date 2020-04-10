import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  @Input() selectedService: string = '';
  @Input() availableProducts: Array<ProductModel> = [];
  @Input() selectedProductDetail: ProductModel = null;

  availableSecondaryServices: Array<{
    key : string;
    val : string;
  }> = [];
  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    const datesFilter = document.getElementById('dates-1');
    const template = document.getElementById('template');
    const instance1 = this.initToolTip(datesFilter,template);
    this.availableSecondaryServices.push({
      key : 'PHOTOGRAPHY',
      val : 'Photography'
    });
    this.availableSecondaryServices.push({
      key : 'MEHNDI',
      val : 'Mehndi'
    });
    this.availableSecondaryServices.push({
      key : 'TENTS_AND_DECOR',
      val : 'Tests & Decor'
    });
    this.availableSecondaryServices.push({
      key : 'MUSIC_AND_DJ',
      val : 'DJ & Music'
    });
    this.availableSecondaryServices.push({
      key : 'WEDDING_CARD',
      val : 'Wedding Card'
    });
    this.availableSecondaryServices.push({
      key : 'TRANSPORT',
      val : 'Transport'
    });
    this.availableSecondaryServices.push({
      key : 'ENTERTAINERS',
      val : 'Entertainers'
    });
    this.availableSecondaryServices.push({
      key : 'BAND_BAJA',
      val : 'Band Baja'
    });
    this.availableSecondaryServices.push({
      key : 'ANCHOR_MC',
      val : 'Anchor MC'
    });
    this.availableSecondaryServices.push({
      key : 'LUXURY_CAR',
      val : 'Luxury Card'
    });
    
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

  openService(serviceName){
    if(this.selectedService === serviceName)
      return;
      this.router.navigateByUrl('/services/'+serviceName);
  }

  isPrimaryService(serviceIndex){
    if(serviceIndex == 0 && this.selectedService == 'VENUE'){
      return 'bottomLine';
    }else if(serviceIndex == 1 && this.selectedService == 'CATERING'){
      return 'bottomLine';
    } else if(serviceIndex == -1 && this.selectedService != 'VENUE' && this.selectedService != 'CATERING' ){
      return 'bottomLine';
    }else{
      return 'noBottomLine';
    }
  }
}
