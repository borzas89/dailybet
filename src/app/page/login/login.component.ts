import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private userService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user).subscribe(data => {
      this.router.navigate(['/profile']);
    },err => {
      this.errorMessage = "Username or password is incorrect.";
    });
  }


}
