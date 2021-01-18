import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { HomeService } from '../home.service';
import {ActivatedRoute} from '@angular/router';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepsComponent implements OnInit , AfterViewInit , AfterContentChecked {


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

      consultationNumber = ""
      getCallback(){
        if((this.consultationNumber || "").trim().length < 10){
          alert("Please enter a 10 digit number.")
          return;
        }

        this.dashboardData.requestCallBack(
            this.consultationNumber
            , "super-planner"
            , null
            , null
            , (resp,err)=>{
              if(err){
                alert("oops")
                return;
              }
              alert("We will get back to you soon!")
    
            }
            )
      }
}
