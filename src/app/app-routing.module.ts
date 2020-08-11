import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {SignUpComponent} from './page/sign-up/sign-up.component';
import {LoginComponent} from './page/login/login.component';
import {ForbiddenComponent} from './page/forbidden/forbidden.component';
import {UserListComponent} from './page/user/user-list/user-list.component';
import {BettingtipEditComponent} from './page/bettingtip/bettingtip-edit/bettingtip-edit.component';
import {BettingtipListComponent} from './page/bettingtip/bettingtip-list/bettingtip-list.component';
import {BettingtipComponent} from './page/bettingtip/bettingtip.component';
import {UserProfileComponent} from './page/user/user-profile/user-profile.component';
import {AuthGuard} from './core/AuthGuard';
import {Role} from './model/role';
import {BettingtipDetailComponent} from './page/bettingtip/bettingtip-detail/bettingtip-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'user-list',
    component: UserListComponent, canActivate: [AuthGuard] , data: {roles: [Role.ADMIN]}
    },
  {
    path: 'user/edit/:id',
    component: UserProfileComponent, canActivate: [AuthGuard] , data: {roles: [Role.ADMIN]}
  },

  {
    path: 'bettingtip',
    component: BettingtipComponent,
    children: [
      { path: '', component: BettingtipListComponent },
      {
        path: 'detail/:id',
        component: BettingtipDetailComponent
      },
      { path: 'edit/:id', component: BettingtipEditComponent, canActivate: [AuthGuard] , data: {roles: [Role.ADMIN]}},
      { path: 'create', component: BettingtipEditComponent, canActivate: [AuthGuard] , data: {roles: [Role.ADMIN]}},

    ]
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

