import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { HomeService } from '../home/home.service';
import {ActivatedRoute} from '@angular/router';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppFooterComponent implements OnInit , AfterViewInit , AfterContentChecked {


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
