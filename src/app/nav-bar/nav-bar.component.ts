import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
