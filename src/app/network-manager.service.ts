import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkManagerService {


  constructor(private http: HttpClient) {}

   apicall(arg, success, failure) {
      const commonOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
            //   'Access-Control-Allow-Origin': '*',
              'Authorization': arg.Authorization || ''
          })
      };
      // console.log(arg)
      switch (arg.httpMethod) {
          case 'getAuth':
              this.http.get(arg.url, commonOptions).subscribe(success, failure);
              break;
          case 'get':
              this.http.get(arg.url).subscribe(success, failure);
              break;
          case 'post':
          case 'postAuth':
              this.http.post(arg.url, arg.params, commonOptions).subscribe(success, failure);
              break;
          default :
      }
  }



}
