import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppNavBarComponent implements OnInit , AfterViewInit , AfterContentChecked {


  constructor(
      private route: ActivatedRoute
  ) { }

    ngOnInit() {

      }

      ngAfterViewInit(): void {

      }

    ngAfterContentChecked(): void {

      }
}
