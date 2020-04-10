import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit , AfterViewInit , AfterContentChecked {


  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute,
      private router: Router,
  ) { }

    ngOnInit() {

      }

      ngAfterViewInit(): void {

      }

    ngAfterContentChecked(): void {

      }

      openContactUs(){
        this.router.navigateByUrl('/contactUs');
      }
}
