import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/auth/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public user$ = this.userService.getUser();
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  click() {
    this.userService.getWorkouts().subscribe((data) => console.log(data));
  }
}
