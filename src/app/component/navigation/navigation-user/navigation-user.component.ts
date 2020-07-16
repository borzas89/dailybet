import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
import {Role} from '../../../model/role';

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.scss']
})
export class NavigationUserComponent implements OnInit {

  public isCollapsed = true;
  currentUser: User;

  constructor(private userService: AuthService, private router: Router) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit() {
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }
  logout() {
    this.userService.logout().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
