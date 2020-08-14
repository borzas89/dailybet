import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Layout.
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// Material Components.
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatDialogModule,
    MatSnackBarModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbAlertModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
