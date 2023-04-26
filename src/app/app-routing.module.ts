import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './features/auth/signup/signup.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TipsComponent } from './tips/tips.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'tracker', component: TrackerComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
