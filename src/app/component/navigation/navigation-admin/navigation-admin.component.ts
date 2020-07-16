import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
import {Role} from '../../../model/role';

@Component({
  selector: 'app-navigation-admin',
  templateUrl: './navigation-admin.component.html',
  styleUrls: ['./navigation-admin.component.scss']
})
export class NavigationAdminComponent implements OnInit {

  public isCollapsed = true;
  currentUser: User;

  constructor(private userService: AuthService, private router: Router) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit() {
  }

  get isAdmin(){
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logOut() {
    this.userService.logout().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
