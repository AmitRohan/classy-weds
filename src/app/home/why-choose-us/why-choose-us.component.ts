import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { HomeService } from '../home.service';
import {ActivatedRoute} from '@angular/router';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WhyChooseUsComponent implements OnInit , AfterViewInit , AfterContentChecked {
  items = [ {
    icon : 'app_wedding',
    label : '200+',
    description : 'Classy Wedding'
  },{
    icon : 'app_customers',
    label : '200+',
    description : 'Happy Customers'
  },{
    icon : 'app_support',
    label : '24/7',
    description : 'Customer Support'
  },{
    icon : 'app_services',
    label : '100+',
    description : 'Best Services'
  }
  ];


  constructor(
      private dashboardData: HomeService,
      private route: ActivatedRoute
  ) { }

    ngOnInit() {

      }

      ngAfterViewInit(): void {

      }

    ngAfterContentChecked(): void {

      }
}
