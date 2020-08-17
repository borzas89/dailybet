import {Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {AdminService} from '../../../service/admin.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'role'
  ];

  selectedUser: User = new User();

  constructor(private adminService: AdminService) { }

  dataSource$: Observable< User[] > = this.adminService.findAllUsers();


  ngOnInit() {

  }

  deleteUser(user: User) {
    this.selectedUser = user;
    this.adminService.deleteUser(this.selectedUser).subscribe(

    );
  }

}

