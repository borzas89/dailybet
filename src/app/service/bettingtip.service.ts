import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Bettingtip} from '../model/bettingtip';

const API_URL = 'http://localhost:5000/api/user/';

@Injectable({
  providedIn: 'root'
})
export class BettingtipService {

  constructor(private http: HttpClient) { }

  findAllTips(): Observable<any> {
    return this.http.get(API_URL + "bettingtips",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findOldTips(): Observable<any> {
    return this.http.get(API_URL + "old-bettingtips-in-week",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findOneTippByUid(tippuid: string): Observable<any> {
    return this.http.get(API_URL + "bettingtip/uid?tippuid="+tippuid,
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findAllFreeTipsToday(): Observable<any> {
    return this.http.get(API_URL + "free-bettingtips",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findAllVipTipsToday(): Observable<any> {
    return this.http.get(API_URL + "vip-bettingtips-by-today",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findAllSingleTips(): Observable<any> {
    return this.http.get(API_URL + "free-singletips",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findVipSingleTipsToday(): Observable<any> {
    return this.http.get(API_URL + "vip-singletips-by-today",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

  findFreeSingleTipsToday(): Observable<any> {
    return this.http.get(API_URL + "free-singletips-by-today",
      {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

}
