import { Injectable } from '@angular/core';
import { NetworkManagerService } from '../network-manager.service';
import { environment } from '../../environments/environment';
import {DriverModel, TripModel} from './home.types';
import {HomeResponses} from './home.responses';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    
    constructor(private apiservice: NetworkManagerService) {
        
    }

    private baseUrl = environment.baseUrl + '/products';

    fetchProductList(callback) {
        this.apiservice.apicall({
                url: this.baseUrl
                , httpMethod: 'get'
            }, (result) => {
            console.log('GOT fetchProductList', result);
            callback(result);
          }, (error) => this.defaultErrorHandler(error, callback));
    }



    defaultErrorHandler(error, callback) {
        console.log(error, ' == error');
        // alert(error.error.message);
        if (callback) { callback(null, error); }
    }
}
