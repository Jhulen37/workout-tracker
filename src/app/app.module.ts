import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeartComponent } from './shared/ui/heart/heart.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { LoginComponent } from './features/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkoutsComponent } from './workouts/workouts.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TipsComponent } from './tips/tips.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HeartComponent,
    SignupComponent,
    LoginComponent,
    WorkoutsComponent,
    AboutComponent,
    MealsComponent,
    TrackerComponent,
    TipsComponent,
    ProfileComponent,
    SettingsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
