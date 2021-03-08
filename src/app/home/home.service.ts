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

    private baseUrl = environment.baseUrl + '/api/v1';

    requestCallBack(phone : string,enquiryType : string ,productId = null,name = null,callback) {
      var _baseUrl = this.baseUrl + '/phonenumber';

      var body = {
          phone,
          enquiryType,
          productId,
          name
      }
      this.apiservice.apicall({
              url: _baseUrl
              , httpMethod: 'post'
              , params : body
          }, (result) => {
                  console.log('GOT requestCallBack', result);
                  callback(result);
        }, (error) => this.defaultErrorHandler(error, callback));
  }

    getServices(callback) {
        var _baseUrl = this.baseUrl + '/services';

        this.apiservice.apicall({
            url: _baseUrl
            , httpMethod: 'get'
        }, (result) => {
            console.log('GOT getServices', result);
            callback(result);
        }, (error) => this.defaultErrorHandler(error, callback));
    }



    defaultErrorHandler(error, callback) {
        console.log(error, ' == error');
        // alert(error.error.message);
        if (callback) { callback(null, error); }
    }
}
