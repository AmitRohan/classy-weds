import { Injectable } from '@angular/core';
import { NetworkManagerService } from '../network-manager.service';
import { environment } from '../../environments/environment';
import {ProductsResponses} from './products.responses';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    
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

    fetchTripListByUserId(userId: string, callback) {
        if (environment.offlineFirst) {
            setTimeout(callback([]), 1000);
            return;
        }
        const body = {
            'sortBy': 'desc',
            'sortOn': 'startTime',
            'filter': [{
                'key': 'userId',
                'requestFilterType': 'EQUAL',
                'value': userId
            }]
        };
        const token = sessionStorage.getItem('outh_key');
        const auth = 'Bearer ' + token;
        // const url_otp = baseUrl + "login/generateOTP"
        this.apiservice.apicall({
                url: this.baseUrl + '/v1/trips?pageSize=100&pageNum=0'
                , params : body
                , httpMethod: 'postAuth'
                , Authorization: auth
            }, (result) => {
            console.log('GOT getTripsDataForUser', result);
            callback(result);
          }, (error) => this.defaultErrorHandler(error, callback));
    }



    defaultErrorHandler(error, callback) {
        console.log(error, ' == error');
        // alert(error.error.message);
        if (callback) { callback(null, error); }
    }
}
