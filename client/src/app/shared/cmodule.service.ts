import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cmodule } from './cmodule.model';

@Injectable({
  providedIn: 'root'
})
export class CmoduleService {
  selectedCmodule: Cmodule = {
    courseName: '',
    cmoduleName: '',
    cmoduleDescription: '',
    cmoduleAuthor: '',
    cmoduleURL: '',
    cmodulePassword: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(public http: HttpClient) { }

  //HttpMethods

  postCmodule(cmodule: Cmodule){
    return this.http.post(environment.apiBaseUrl+'/cmodule',cmodule,this.noAuthHeader);
  }

  // fetchCmoduleByFullName(cmodule: Cmodule) {
  //   let apiURL = environment.apiBaseUrl+'/fetchCmodule/'+cmodule.cmoduleName;
    
  //   console.log(apiURL);
  //   return this.http.get(apiURL, this.noAuthHeader);
  // }

  

  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getCmodulePayload() {
    var token = this.getToken();
    if (token) {
      var cmodulePayload = atob(token.split('.')[1]);
      return JSON.parse(cmodulePayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var cmodulePayload = this.getCmodulePayload();
    if (cmodulePayload)
      return cmodulePayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
