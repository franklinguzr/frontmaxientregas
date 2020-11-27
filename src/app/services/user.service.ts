import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {global} from './global';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url;
  public user;
  public token;
  public identity;

  constructor(
    // tslint:disable-next-line:variable-name
    private _http: HttpClient,
  ) {
    this.url = global.url;
    this.user = new User('', '', '', '', '');
  }

  login(user, getToken = null): Observable<any>{
    let json = user;

    if (getToken != null){
      user.getToken = true;
    }

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'login' , json, { headers: headers});

  }
getToken(){

}

getIdentity(){

}


}
