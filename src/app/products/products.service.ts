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

    private baseUrl = environment.baseUrl + '/api/v1';

    fetchProductList(serviceName,callback) {
        var _baseUrl = this.baseUrl + '/services/'+ serviceName +'/products/';
        this.apiservice.apicall({
                url: _baseUrl
                , httpMethod: 'post'
                , params : {}
            }, (result) => {
                    console.log('GOT fetchProductList', result);
                    callback(result);
          }, (error) => this.defaultErrorHandler(error, callback));
    }

    fetchProductDetails(productId,callback) {
        var _baseUrl = this.baseUrl + '/products/'+productId;
        this.apiservice.apicall({
                url: _baseUrl
                , httpMethod: 'get'
            }, (result) => {
                    console.log('GOT fetchProductDetails', result);
                    callback(result);
          }, (error) => this.defaultErrorHandler(error, callback));
    }

    defaultErrorHandler(error, callback) {
        console.log(error, ' == error');
        // alert(error.error.message);
        if (callback) { callback(null, error); }
    }
}
