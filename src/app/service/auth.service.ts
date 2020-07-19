import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

const API_URL = 'http://localhost:5000/api/user/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: Observable<User>;
  public currentUserSubject: BehaviorSubject<User>;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any> {
    const headers = new HttpHeaders(user ? {
      authorization:'Basic ' + btoa(user.username + ':' + user.password)
    } : {});

    return this.http.get<any> (API_URL + "login", {headers: headers})
      .pipe(map(response => {
        if ( response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        console.log(response);
        return response;
      }));
  }

  logout(): Observable<any> {
    return this.http.post(API_URL + "logout", {})
      .pipe(map(response => {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['login']);
      }));
  }

  register(user: User): Observable<any> {
    console.log(JSON.stringify(user));
    return this.http.post(API_URL + "registration", JSON.stringify(user),
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
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
