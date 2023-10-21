import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  // ApiKey = 'MySecretKey';
  baseUrl = 'https://localhost:7023/api/User/GetByLoginIdPassword';
  constructor(private http: HttpClient)
  {

  }
  loginUser(inputdata:any) : Observable<string>{
    let params = new HttpParams();
    params = params.set('LoginId', inputdata.LoginId);
    params = params.set('Password', inputdata.Password);
    // headers = headers.set('ApiKey', this.ApiKey);
    // return this.http.post(this.baseUrl, inputdata, {headers: headers});
    return this.http.get(this.baseUrl, {responseType:'text', params:params});
  }

  IsLoggedIn(){
    return localStorage.getItem('token') != null;
  }
}
