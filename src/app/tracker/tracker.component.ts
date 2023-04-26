import { Component } from '@angular/core';
import { UserService } from '../shared/services/auth/user/user.service';
interface Workout {
  name: string;
  date: Date;
  duration: number;
  sets: number;
}
interface PopularWorkout {
  name: string;
  imageUrl: string;
}
@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
})
export class TrackerComponent {
  constructor(private userService: UserService) {}
  workoutName = '';
  workoutDuration: number | null = null;
  workoutSets: number | null = null;
  db_workouts: any = this.userService.getWorkouts();
  workouts: Workout[] = [];
  popularWorkouts: PopularWorkout[] = [
    {
      name: 'Push-ups',
      imageUrl:
        'https://media.istockphoto.com/id/882882258/vector/the-active-afroamerican-young-man-is-doing-the-push-up-exercise.jpg?s=612x612&w=0&k=20&c=ZTtDlmbdj47jbCW6KPzT_OLWmnvX98CV5dtJvusLjWk=',
    },
    {
      name: 'Squats',
      imageUrl:
        'https://legionathletics.com/wp-content/uploads/2022/05/54-BLS-High-Low-Bar-Squat.jpg',
    },
    {
      name: 'Lunges',
      imageUrl:
        'https://www.shutterstock.com/image-vector/young-man-doing-lunge-walk-260nw-1711519441.jpg',
    },
    {
      name: 'Plank',
      imageUrl:
        'https://sf.ezoiccdn.com/ezoimgfmt/www.fitliferegime.com/wp-content/uploads/2021/10/Forearm-Plank.webp?ezimgfmt=rs:382x215/rscb1/ngcb1/notWebP',
    },
  ];

  addWorkout() {
    if (
      this.workoutName &&
      this.workoutDuration !== null &&
      this.workoutSets !== null
    ) {
      this.workouts.push({
        name: this.workoutName,
        duration: this.workoutDuration,
        sets: this.workoutSets,
        date: new Date(),
      });
    }
  }

  getImageForWorkout(workoutName: string): string {
    const popularWorkout = this.popularWorkouts.find(
      (w) => w.name === workoutName
    );
    return popularWorkout ? popularWorkout.imageUrl : '';
  }
}
