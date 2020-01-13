import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  selectedCourse: Course = {
    courseCategory: '',
    courseName: '',
    courseDescription: '', 
    courseImage: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(public http: HttpClient) { }

  //HttpMethods

  postCourse(course: Course){
    return this.http.post(environment.apiBaseUrl+'/course',course,this.noAuthHeader);
  }

  fetchCourseByFullName(course: Course) {
    let apiURL = environment.apiBaseUrl+'/fetchCourse/'+course.courseName;
    
    console.log(apiURL);
    return this.http.get(apiURL, this.noAuthHeader);
  }

  

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

  getCoursePayload() {
    var token = this.getToken();
    if (token) {
      var coursePayload = atob(token.split('.')[1]);
      return JSON.parse(coursePayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var coursePayload = this.getCoursePayload();
    if (coursePayload)
      return coursePayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
