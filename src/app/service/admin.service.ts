import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

let API_URL ="http://localhost:5000/api/admin/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(API_URL + 'user-update', JSON.stringify(user),
      {headers: this.headers});
  }

  deleteUser(user: User): Observable<any> {
    return this.http.post(API_URL + 'user-delete', JSON.stringify(user),
      {headers: this.headers});
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'user-all',
      {headers: this.headers});
  }

  numberOfUsers(): Observable<any> {
    return this.http.get(API_URL + 'user-number',
      {headers: this.headers});
  }

}
