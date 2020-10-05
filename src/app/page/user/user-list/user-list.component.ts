import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {User} from '../../../model/user';
import {AdminService} from '../../../service/admin.service';
import {Observable, Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  selectedUser: User = new User();
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'role',
    'actions'
  ];
  pageSizes: number[] = [5, 10, 25, 100];
  dataSubscription: Subscription;
  currentFilterKey: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;

  constructor(private adminService: AdminService,
              private router: Router)
  { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSubscription = this.adminService.findAllUsers().subscribe(
      users => this.dataSource.data = (users as unknown as User[])
    );

    this.dataSource.filterPredicate = (data: User, filter: string) => {
      const key = this.currentFilterKey || '';
      const source = key ? String(data[key]) : JSON.stringify(data);
      return source.toLowerCase().includes(filter.toLowerCase());
    };
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(user: User): void {
    this.router.navigate( ['users/edit/' + user.id]);
  }

  onDelete(user: User): void {

  }

  deleteUser(user: User) {
    this.selectedUser = user;
    this.adminService.deleteUser(this.selectedUser).toPromise().then(

    );
  }

}

