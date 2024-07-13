import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { MyTaskComponent } from './component/my-task/my-task.component';
import { NavComponent } from './component/nav/nav.component';
import { MyProfileModule } from './my-profile/my-profile.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    MyTaskComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyProfileModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
