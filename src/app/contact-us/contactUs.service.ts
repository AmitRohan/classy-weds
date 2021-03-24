import { Injectable } from '@angular/core';
import { NetworkManagerService } from '../network-manager.service';
import { environment } from '../../environments/environment';
import {HomeResponses} from './contactUs.responses';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
    
    constructor(private apiservice: NetworkManagerService) {
    
    }

    private baseUrl = environment.baseUrl + '/api/v1';

    
    contactUs(name,phone,email,message,pwc,callback) {
        var _baseUrl = this.baseUrl + '/contactus';

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
             
                    callback(result);
          }, (error) => this.defaultErrorHandler(error, callback));
    }

    defaultErrorHandler(error, callback) {
        console.log(error, ' == error');
        // alert(error.error.message);
        if (callback) { callback(null, error); }
    }
}
