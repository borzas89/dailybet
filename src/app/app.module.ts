import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { BettingtipDetailComponent } from './page/bettingtip/bettingtip-detail/bettingtip-detail.component';
import { BettingtipListComponent } from './page/bettingtip/bettingtip-list/bettingtip-list.component';
import { UserListComponent } from './page/user/user-list/user-list.component';
import { UserProfileComponent } from './page/user/user-profile/user-profile.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationAdminComponent } from './component/navigation/navigation-admin/navigation-admin.component';
import { NavigationUserComponent } from './component/navigation/navigation-user/navigation-user.component';
import {FormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ForbiddenComponent,
    BettingtipListComponent,
    BettingtipDetailComponent,
    UserListComponent,
    UserProfileComponent,
    FooterComponent,
    NavigationAdminComponent,
    NavigationUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
