import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl = environment.baseurl;
  constructor(private httpClient: HttpClient) { }

    
  post(url : any,data : any, options: any){
    
    return this.httpClient.post(this.baseurl + url ,data,options);
  }
  get(url: any,options: any){
    
    return this.httpClient.get(this.baseurl+url,options)
  }
}
