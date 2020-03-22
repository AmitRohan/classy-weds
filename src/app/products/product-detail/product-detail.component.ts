import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, AfterContentChecked, OnChanges} from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductModel } from '../products.types';

declare const $: any;

@Component({
  selector: 'app-home-products-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit , AfterViewInit , OnChanges , AfterContentChecked {
  @Input() selectedProductDetail: ProductModel = null;
  
  selectedPhotoUrl = ''

  constructor(
      private dashboardData: ProductsService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    $('#productImageShowcase').on('hide.bs.modal', function (event) {
       this.selectedPhotoUrl = ''
    })
  }

  ngAfterContentChecked(): void {

  }

  ngOnChanges(changes){
    console.log("ProductDetailComponent : changes ", changes);
  }

  showImage(imageUrl){
    this.selectedPhotoUrl = imageUrl;
  }
  
}
