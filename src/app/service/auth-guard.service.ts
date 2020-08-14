import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../model/user';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  currentUser: User;

  constructor(private router: Router,
              private userService: UserService) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
      console.log(this.currentUser);
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      console.log(route.data.roles);
      if (route.data.roles && route.data.roles.indexOf(this.currentUser.role) === -1) {
        if(this.currentUser.role === 'ADMIN') {
          return true;
        } else{
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      return true;
    }
    this.router.navigate(['/sign-in']);
    return false;
  }
}
