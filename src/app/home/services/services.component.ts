import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { HomeService } from '../home.service';
import {ActivatedRoute} from '@angular/router';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit , AfterViewInit , AfterContentChecked {


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
