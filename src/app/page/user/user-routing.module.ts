import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Role} from '../../model/role';
import {AuthGuard} from '../../core/AuthGuard';
import {UserListComponent} from './user-list/user-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent, canActivate: [AuthGuard] , data: {roles: [Role.ADMIN]}
    },
  {
    path: 'edit/:id',
    component: UserProfileComponent, canActivate: [AuthGuard] , data: {roles: [Role.ADMIN]}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

