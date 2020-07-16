import { Component } from '@angular/core';
import {User} from './model/user';
import {AuthService} from './service/auth.service';
import {Router, RoutesRecognized} from '@angular/router';
import {Role} from './model/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dailybet';
  currentUser: User;
  isAdminPanel = false;
  constructor(private userService: AuthService, private router: Router){
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
      this.userChanged();
    });
  }

  userChanged(){
    if(!this.currentUser || Role.ADMIN !== this.currentUser.role){
      console.log('role ' + this.currentUser.role)
      this.isAdminPanel = false;
      return;
    }
    this.router.events.subscribe((evt) => {
      if(evt instanceof RoutesRecognized){
        var roles = evt.state.root.firstChild.data.roles;
        if ( roles && roles.indexOf(this.currentUser.role) !== -1) {
          console.log('role ' + roles);
          this.isAdminPanel = true;
        }
      }
    });
  }
}
