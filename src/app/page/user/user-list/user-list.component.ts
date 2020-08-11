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

  userColumns: {key: string, label: string}[] = [
    {key: 'id', label: 'ID'},
    {key: 'name', label: 'Name'},
    {key: 'username', label: 'Email'},
    {key: 'role', label: 'Role'},
  ];

  selectedUser: User = new User();

  constructor(private adminService: AdminService) { }

  list$: Observable<User | User[]> = this.adminService.findAllUsers();
  cols: any[] = this.userColumns;

  ngOnInit() {

  }

  deleteUser(user: User) {
    this.selectedUser = user;
    this.adminService.deleteUser(this.selectedUser).subscribe(

    );
  }

}

