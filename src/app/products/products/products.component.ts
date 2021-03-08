import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnChanges, EventEmitter, Output} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ContactUsBody, ProductModel, ReviewBody } from '../products.types';

import tippy, {animateFill} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import {ClassyService} from "../../home/home.types";


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
  
  @Input() hasRequestedCallback: false;
  @Input() selectedService: number = -1;
  @Input() availableProducts: Array<ProductModel> = [];
  @Input() selectedProductDetail: ProductModel = null;
  @Output() onContactUsClicked = new EventEmitter<ContactUsBody>();
  @Output() onAddReviewClicked = new EventEmitter<ReviewBody>();

  serviceName: string = '';

  availableSecondaryServices: Array<ClassyService> = [];
  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    this.loadServices();
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

  patchServiceName(selectedService: number){
    var checkActiveArray = this.availableSecondaryServices.filter(item => item.id == selectedService).map(item => item.name);
    var _serviceName = (checkActiveArray.length > 0)? checkActiveArray[0]: '' ;
    this.serviceName = _serviceName.toUpperCase();

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

  private loadServices() {
    this.dashboardData.getServices((resp,error)=>{
      console.log(resp,error)
      if(error){
        return;
      }
      this.availableSecondaryServices = (resp || []).filter((_ , i) => i < 6);
    })
  }

  toLocaleNameFormat(name: string = '') : string {
    return name.toUpperCase();
  }

  cleanedServicesList( dirtyList : Array<ClassyService> = []) : Array<ClassyService>{
    return  dirtyList.filter( item =>item.name !== 'venue').filter( item =>item.name !== 'catering')
  }

  openService(serviceName){
    if(this.selectedService === serviceName)
      return;
    this.router.navigateByUrl('/services/'+serviceName);
  }

  isPrimaryService(serviceIndex){
    if(serviceIndex == 0 && this.selectedService == 5){
      return 'bottomLine';
    }else if(serviceIndex == 1 && this.selectedService == 50){
      return 'bottomLine';
    } else if(serviceIndex == -1 && this.isSecondaryService() ){
      return 'bottomLine';
    }else{
      return 'noBottomLine';
    }
  }

  isSecondaryService(){
    return (this.selectedService != 5 && this.selectedService != 50)
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

  getClassToUseFor(position : number): string{
    if(this.selectedProductDetail)
      return "col-lg-6 p-0"
    else if(position == 0){
      return "col-lg-12 p-0"
    }
    else {
      return "col-lg-0 p-0"
    }
  }
}
