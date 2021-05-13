import { Injectable } from '@angular/core';
import { HttpService } from '../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpService) { }

  loginService(data : any){
    return this.http.post('user/login',data,"");
  }

  registerService(data : any){
    return this.http.post('user/userSignUp',data,"");
  }

  forgotService(data : any){
    return this.http.post('user/reset',data,"");
  }

  resetService(data : any, token : any){
    return this.http.post('user/reset-password',data,token)
  }
}
