import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {switchMap, take} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../../service/admin.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(  private userService: AdminService, private ar: ActivatedRoute) { }

  user: User = null;
  serverError = '';

  ngOnInit() {
    this.ar.params.pipe(
      switchMap( params => this.userService.findUserById(params.id) )
    )
      .pipe( take(1) )
      .subscribe(
        user => {
          this.user = (user as User);
          this.user.password = '';
        }
      );
  }

  onSubmit(ngForm: NgForm): void {
    const putObject = Object.assign({id: this.user.id}, ngForm.value);
    this.userService.updateUser(putObject)
      .toPromise().then(
      user => history.back(),
      err => {
        this.serverError = err.error;
        const to = setTimeout( () => {
          clearTimeout(to);
          this.serverError = '';
        }, 3000);
      }
    );
  }

}
