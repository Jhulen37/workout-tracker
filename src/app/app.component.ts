import { Component } from '@angular/core';
import { UserService } from './shared/services/auth/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'workout-tracker';
  theme: string;

  constructor(private userService: UserService) {
    this.theme = 'light';
  }
  ngOnInit() {
    this.userService.currentUser();
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme = savedTheme;
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add('light');
    }
  }
  toggleTheme() {
    if (this.theme === 'light') {
      this.theme = 'dark';
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.theme = 'light';
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }
}
