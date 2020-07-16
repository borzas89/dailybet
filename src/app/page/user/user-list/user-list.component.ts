import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../../../model/user';
import {AdminService} from '../../../service/admin.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: Array<User>;
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'username', 'role', 'subscriptionEnd', 'action'];
  selectedUser: User = new User();
  errorMessage: string;
  infoMessage: string;

  selectedUserSubscriptionEnd: string;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.findAllUsers();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllUsers() {
    this.adminService.findAllUsers().subscribe(data => {
      this.userList = data;
      this.dataSource.data = data;
    });
  }

  editUserRequest(user: User) {
    this.selectedUser = user;
    $('#userModal').modal('show');
  }

  editUser() {
    this.adminService.updateUser(this.selectedUser).subscribe(data => {
      const itemIndex = this.userList.findIndex(item => item.id == this.selectedUser.id);
      this.userList[itemIndex] = this.selectedUser;
      this.dataSource = new MatTableDataSource(this.userList);
      this.infoMessage = "Sikeres adatmódosítás.";
      $("#userModal").modal('hide');
    },err => {
      if(err.status === 409){
        this.errorMessage = "Username should be unique for each user.";
      }else{
        this.errorMessage = "Unexpected error occurred.";
      }
    });
  }

  deleteUserRequest(user: User) {
    this.selectedUser = user;
    $("#deleteModal").modal('show');
  }

  deleteUser(){
    this.adminService.deleteUser(this.selectedUser).subscribe(data => {
      let itemIndex = this.userList.findIndex(item => item.id == this.selectedUser.id);
      if(itemIndex !== -1){
        this.userList.splice(itemIndex, 1);
      }
      this.dataSource = new MatTableDataSource(this.userList);
      this.infoMessage = "Sikeres adatmódosítás.";
      $("#deleteModal").modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
