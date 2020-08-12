import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bettingtip} from '../model/bettingtip';

const API_URL = 'http://localhost:5000/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  currentUser: User;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(API_URL + 'user-update', JSON.stringify(user));
  }

  deleteUser(user: User): Observable<any> {
    return this.http.post(API_URL + 'user-delete', JSON.stringify(user));
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'user-all');
  }

  findUserById(id: string): Observable<any> {
    return this.http.get(API_URL + 'user-get/id?id=' + id );
  }

  numberOfUsers(): Observable<any> {
    return this.http.get(API_URL + 'user-number');
  }

  // only Admin can create or modify betting tips
  createBettingTip(bettingTip: Bettingtip): Observable<any> {
    return this.http.post(API_URL + 'bettingtip-create', JSON.stringify(bettingTip));
  }

  updateBettingTip(bettingTip: Bettingtip) {
    return this.http.put(API_URL + 'bettingtip-update', JSON.stringify(bettingTip));
  }

}
