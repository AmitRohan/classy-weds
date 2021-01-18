import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnChanges, EventEmitter, Output} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ContactUsBody, ProductModel, ReviewBody } from '../products.types';

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
  @Output() onContactUsClicked = new EventEmitter<ContactUsBody>();
  @Output() onAddReviewClicked = new EventEmitter<ReviewBody>();

  serviceName: string = '';

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

  patchServiceName(selectedService: string){
    var checkActiveArray = this.availableSecondaryServices.filter(item => item.key == selectedService).map(item => item.val);
    var _serviceName = (checkActiveArray.length > 0)? checkActiveArray[0]: '' ;
    this.serviceName = (selectedService == 'VENUE')
                                        ? "Venue"
                                        :((selectedService == 'CATERING'
                                                ? 'Catering' 
                                                : _serviceName ));

    this.selectedService = selectedService;
                                                
  }

  ngOnChanges(changes){
    if(changes.selectedService){
      setTimeout(()=>{
        this.patchServiceName(changes.selectedService.currentValue);
      },200)
    }
      
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
    } else if(serviceIndex == -1 && this.isSecondaryService() ){
      return 'bottomLine';
    }else{
      return 'noBottomLine';
    }
  }

  isSecondaryService(){
    return (this.selectedService != 'VENUE' && this.selectedService != 'CATERING')
  }
  
  isSecondaryServiceActive(serviceName){
    if(this.selectedService == serviceName){
      return "secondary_service_active";
    }
    return "secondary_service_inactive";

  }

  contactUsClicked(contactUsBody:ContactUsBody){
    this.onContactUsClicked.emit(contactUsBody);
  }

  addReviewClicked(reviewBody:ReviewBody){
    this.onAddReviewClicked.emit(reviewBody);
  }
}
