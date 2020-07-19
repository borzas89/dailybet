import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_URL = 'http://localhost:5000/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: Observable<User>;
  public currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any> {
    const headers = new HttpHeaders(user ? {
      authorization:'Basic ' + btoa(user.username + ':' + user.password)
    }:{});

    return this.http.get<any> (API_URL + "login", {headers: headers})
      .pipe(map(response => {
        if(response){
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        console.log(response)
        return response;
      }));
  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + "logout", {})
      .pipe(map(response => {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      }));
  }

  register(user: User): Observable<any> {
    console.log(JSON.stringify(user));
    return this.http.post(API_URL + "registration", JSON.stringify(user),
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  // elemzések
  findAllTips(): Observable<any> {
    return this.http.get(API_URL + "bettingtips",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  // korábbi elemzések
  findOldTips(): Observable<any> {
    return this.http.get(API_URL + "old-bettingtips-in-week",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findOneTippByUid(tippuid: string): Observable<any> {
    return this.http.get(API_URL + "bettingtip/uid?tippuid="+tippuid,
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findAllFreeTipsToday(): Observable<any> {
    return this.http.get(API_URL + "free-bettingtips-by-today",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findAllVipTipsToday(): Observable<any> {
    return this.http.get(API_URL + "vip-bettingtips-by-today",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  // single tippek
  findAllSingleTips(): Observable<any> {
    return this.http.get(API_URL + "free-singletips",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  // single tippek
  findVipSingleTipsToday(): Observable<any> {
    return this.http.get(API_URL + "vip-singletips-by-today",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  // single tippek
  findFreeSingleTipsToday(): Observable<any> {
    return this.http.get(API_URL + "free-singletips-by-today",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }
  SendVerificationMail() {

  }

  ForgotPassword(value: string) {

  }

  isLoggedin() {
    return this.currentUserValue != null;
  }
}
