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

    fetchReviewListForProduct(productId,callback) {
        var _baseUrl = this.baseUrl + '/products/'+productId +'/reviews';
        this.apiservice.apicall({
                url: _baseUrl
                , httpMethod: 'get'
            }, (result) => {
                    console.log('GOT fetchReviewListForProduct', result);
                    callback(result);
          }, (error) => this.defaultErrorHandler(error, callback));
    }

    addReviewForProduct(productId,reviewToAdd,callback) {
        reviewToAdd = {"rating":3, "tags":["Value For Money", "Amazing Food", "Hospitality"], "user_id":"31", "message":"this is awesome"};
        var _baseUrl = this.baseUrl + '/products/'+productId +'/newReview';
        this.apiservice.apicall({
                url: _baseUrl
                , httpMethod: 'post'
                , params : reviewToAdd
            }, (result) => {
                    console.log('GOT addReviewForProduct', result);
                    callback(result);
          }, (error) => this.defaultErrorHandler(error, callback));
    }

    requestCallBack(phoneNumber,mode,productId = null,name = null,callback) {
        var _baseUrl = environment.baseUrl + '/phonenumber';

        var body = {
            phone : phoneNumber,
            mode : mode,
            product_id : productId,
            name : name
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

    contactUs(name,phone,email,message,pwc,callback) {
        var _baseUrl = environment.baseUrl + '/contactus';

        var body = {
            message,
            name,
            email,
            phone,
            pwc
        }
        this.apiservice.apicall({
                url: _baseUrl
                , httpMethod: 'post'
                , params : body
            }, (result) => {
                    console.log('GOT contactUs', result);
                    callback(result);
          }, (error) => this.defaultErrorHandler(error, callback));
    }

    defaultErrorHandler(error, callback) {
        console.log(error, ' == error');
        // alert(error.error.message);
        if (callback) { callback(null, error); }
    }
}
