import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/auth/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('300ms ease-in-out')),
      transition('* => void', animate('300ms ease-in-out')),
    ]),
  ],
})
export class NavBarComponent implements OnInit {
  public showDropdown: boolean = false;
  public user$ = this.userService.getUser();
  loggedIn(): boolean {
    // Your authentication logic here
    return Boolean(localStorage.getItem('token'));
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
