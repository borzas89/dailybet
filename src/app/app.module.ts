import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { BettingtipEditComponent } from './page/bettingtip/bettingtip-edit/bettingtip-edit.component';
import { BettingtipListComponent } from './page/bettingtip/bettingtip-list/bettingtip-list.component';
import { UserListComponent } from './page/user/user-list/user-list.component';
import { UserProfileComponent } from './page/user/user-profile/user-profile.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationUserComponent } from './component/navigation/navigation-user/navigation-user.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

import { BettingtipComponent } from './page/bettingtip/bettingtip.component';
import { BettingtipDetailComponent } from './page/bettingtip/bettingtip-detail/bettingtip-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ForbiddenComponent,
    BettingtipListComponent,
    BettingtipEditComponent,
    UserListComponent,
    UserProfileComponent,
    FooterComponent,
    NavigationUserComponent,
    BettingtipComponent,
    BettingtipDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbAlertModule,
    ReactiveFormsModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
