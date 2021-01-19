import { Component, OnInit, Renderer2 } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

declare const $: any;
declare const jquery: any;
declare const screenfull: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    previousUrl: string;
    merchantName = environment.merchantName;
    constructor(private renderer: Renderer2, private router: Router, private http: HttpClient) {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    if (this.previousUrl) {
                        this.renderer.removeClass(document.body, this.previousUrl);
                    }
                    const currentUrl = event.url.split('/');
                    const currentUrlSlug = currentUrl[currentUrl.length - 1];
                    if (currentUrlSlug) {
                        this.renderer.addClass(document.body, currentUrlSlug);
                    }
                    this.previousUrl = currentUrlSlug;
                }
                window.scrollTo(0, 0)
            });
            
    }

    ngOnInit() {

    }
}
