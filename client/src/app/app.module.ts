// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
//user related services and components
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { CourseService } from './shared/course.service';
import { CourseaddComponent } from './courseadd/courseadd.component';

import { CmoduleService } from './shared/cmodule.service';
import { CmoduleaddComponent } from './cmoduleadd/cmoduleadd.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    CourseaddComponent,
    CmoduleaddComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService,CourseService,CmoduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }