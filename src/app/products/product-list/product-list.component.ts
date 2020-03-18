import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;
declare var H: any;

@Component({
  selector: 'app-home-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit , AfterViewInit , AfterContentChecked {
  @Input() productList: Array<any>;
  @Input() selectedItem = "";
  _ColumnNoClass = ""
  

  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    if(this.selectedItem.length > 0){

    }else {

    }
    
  }

  ngAfterContentChecked(): void {

  }

  selectItem(item:any){
    this.router.navigateByUrl('/products/' + item.index);

    
  }
}
