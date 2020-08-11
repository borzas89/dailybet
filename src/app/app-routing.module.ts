import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {AuthGuardService} from './service/auth-guard.service';
import {SignUpComponent} from './page/sign-up/sign-up.component';
import {LoginComponent} from './page/login/login.component';
import {ForbiddenComponent} from './page/forbidden/forbidden.component';
import {UserListComponent} from './page/user/user-list/user-list.component';
import {BettingtipDetailComponent} from './page/bettingtip/bettingtip-detail/bettingtip-detail.component';
import {BettingtipListComponent} from './page/bettingtip/bettingtip-list/bettingtip-list.component';
import {BettingtipComponent} from './page/bettingtip/bettingtip.component';
import {UserProfileComponent} from './page/user/user-profile/user-profile.component';

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
    component: UserListComponent,
  },
  {
    path: 'user/edit/:id',
    component: UserProfileComponent
  },

  {
    path: 'bettingtip',
    component: BettingtipComponent,
    children: [
      { path: '', component: BettingtipListComponent },
      { path: 'create', component: BettingtipDetailComponent },
      { path: ':id', component: BettingtipDetailComponent },


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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

