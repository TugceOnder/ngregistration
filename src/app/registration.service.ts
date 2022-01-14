import { User } from './user';
 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient ) { }

  public loginUserFromRemote(user :User):Observable<any>{
   
    return this._http.post<any>("http://localhost:8089/login",user)  //login sayfası 
  }

  public registerUserFromRemote(user :User):Observable<any>{
   
    return this._http.post<any>("http://localhost:8089/registeruser",user)  //register sayfası 
  }
}
