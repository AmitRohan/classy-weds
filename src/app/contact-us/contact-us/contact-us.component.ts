import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { ContactUsService } from '../contactUs.service';
import {ActivatedRoute} from '@angular/router';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUs implements OnInit , AfterViewInit , AfterContentChecked {


  constructor(
      private dashboardData: ContactUsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }

  ngAfterContentChecked(): void {

  }

  userEmail : string = "";
  userName : string = "";
  userNumber : string = "";
  userMessage : string = "";
  userPWCEmail : boolean = true;

  shouldUseEmail(mode){
    this.userPWCEmail = mode;
  }

  submitContactUs() {

    if((this.userNumber || "").trim().length < 10){
      alert("Please enter a 10 digit number.")
      return;
    }

    this.dashboardData.contactUs(
        this.userName
        ,this.userNumber
        ,this.userEmail
        ,this.userMessage
        , this.userPWCEmail ? "email" : "password"
        ,(resp,err)=>{
            if(err){
              alert("Something Went Wrong")
              return;
            }
            alert("Submitted")
        })
  }
}
