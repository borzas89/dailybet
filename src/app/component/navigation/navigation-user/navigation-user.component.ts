import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {Router} from '@angular/router';
import {Role} from '../../../model/role';
import {UserService} from '../../../service/user.service';

export interface IMenuItem {
  url: string;
  text: string;
  disabled?: boolean;
  icon?: string;
}

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.scss']
})
export class NavigationUserComponent implements OnInit {
  currentUser: User;

  menuItems: IMenuItem[] = [
    {url: '/', text: 'Home', icon: 'home'},
    {url: '/users', text: 'Users', icon: ''},
    {url: '/bettingtip', text: 'Bettingtips', icon: ''},
    {url: '/bettingtip/create/', text: 'Add betting tips', icon: ''},
  ];

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

  logout() {
    this.userService.logout().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
