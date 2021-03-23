import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { HomeService } from '../home.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassyService} from "../home.types";

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-services-service-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesListComponent implements OnInit , AfterViewInit , AfterContentChecked {
  serviceList: Array<ClassyService> = [

  ];

//   [ {
//     icon : `service_photography.png`
//     , name : `PHOTOGRAPHY`
//   },{
//   icon : `service_music_dj.png`
// , name : `MUSIC AND DJ`
// },{
//   icon : `service_mehndi.png`
//       , name : `MEHNDI`
// },{
//   icon : `service_makeup.png`
//       , name : `MAKEUP`
// },{
//   icon : `service_venue.png`
//       , name : `VENUE`
// },{
//   icon : `service_wedding.png`
//       , name : `WEDDING CARD`
// }]

  constructor(
      private dashboardData: HomeService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

    ngOnInit() {
        this.loadServices();
      }

      ngAfterViewInit(): void {

      }

    ngAfterContentChecked(): void {

      }

      openService(service : ClassyService){
        this.router.navigateByUrl('/services/'+service.id);
      }

      private loadServices() {
        this.dashboardData.getServices((resp,error)=>{
          if(error){
            return;
          }
          this.serviceList = (resp || []).filter((_ , i) => i < 6);
        })
      }

  toLocaleNameFormat(name: string = '') : string {
    return name.toUpperCase();
  }
}
