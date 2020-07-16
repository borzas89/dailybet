import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {User} from '../../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private userService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.user.subscriptionStart = new Date();
    this.user.subscriptionEnd = new Date();
    this.userService.register(this.user).subscribe(data => {
      this.router.navigate(['/verify-email-address']);
    },err => {
      this.errorMessage = "Username is already exist";
    });
  }

}
