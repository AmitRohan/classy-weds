import { Injectable } from '@angular/core';
import { NetworkManagerService } from '../network-manager.service';
import { environment } from '../../environments/environment';
import {ProductsResponses} from './products.responses';
import { ContactUsBody, ReviewBody } from './products.types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    
    constructor(private apiservice: NetworkManagerService) {
    
    }

    private baseUrl = environment.baseUrl + '/api/v1';

    fetchProductList(serviceName,callback) {
        var _baseUrl = this.baseUrl + '/services/'+ serviceName +'/products';
        this.apiservice.apicall({
                url: _baseUrl
                , httpMethod: 'post'
                , params : {}
            }
            , (result) => { callback(result); }
            , (error) => this.defaultErrorHandler(error, callback));
    }

    fetchProductDetails(productId,callback) {
        var _baseUrl = this.baseUrl + '/products/'+productId;
        this.apiservice.apicall({
                url: _baseUrl
                , httpMethod: 'get'
            }
            , (result) => { callback(result); }
            , (error) => this.defaultErrorHandler(error, callback));
    }

    fetchReviewListForProduct(productId,callback) {
        var _baseUrl = this.baseUrl + '/products/'+productId +'/reviews';
        this.apiservice.apicall({
                url: _baseUrl
                , httpMethod: 'get'
            }
            , (result) => { callback(result); }
            , (error) => this.defaultErrorHandler(error, callback));
    }

    addReviewForProduct(productId,reviewBody: ReviewBody,callback) {
        var _baseUrl = this.baseUrl + '/products/'+productId +'/newReview';
        this.apiservice.apicall({
                url: _baseUrl
                , httpMethod: 'post'
                , params : reviewBody
            }
            , (result) => {callback(result); }
            , (error) => this.defaultErrorHandler(error, callback));
    }

    requestCallBack(requestBody : ContactUsBody,callback) {
        var _baseUrl = this.baseUrl + '/phonenumber';

        this.apiservice.apicall({
                url: _baseUrl
                , httpMethod: 'post'
                , params : requestBody
            }
            , (result) => { callback(result); }
            , (error) => this.defaultErrorHandler(error, callback));
    }

    getServices(callback) {
        var _baseUrl = this.baseUrl + '/services';

        this.apiservice.apicall({
            url: _baseUrl
            , httpMethod: 'get'
        }, (result) => {
            callback(result);
        }, (error) => this.defaultErrorHandler(error, callback));
    }

    defaultErrorHandler(error, callback) {
        console.log(error, ' == error');
        // alert(error.error.message);
        if (callback) { callback(null, error); }
    }
}
