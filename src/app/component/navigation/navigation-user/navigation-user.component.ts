import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {Router} from '@angular/router';
import {Role} from '../../../model/role';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.scss']
})
export class NavigationUserComponent implements OnInit {

  public isCollapsed = true;
  currentUser: User;
  navbarOpen = false;

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

  isLoggedIn() {
    return this.currentUser != null ;
  }


  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  logout() {
    this.userService.logout().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
