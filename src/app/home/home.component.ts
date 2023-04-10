import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public http: HttpClient) {}

  headers = new HttpHeaders({
    Authorization: 'Bearer 87f453f1068337d3a07b27b8450cde9088952e73',
  });
  ngOnInit(): void {}

  click() {
    // this.http
    //   .post('http://localhost:3000/api/v1/users/login', {
    //     email: 'test123@test.com',
    //     password: 'password',
    //     password_confirmation: 'password',
    //   })
    //   .subscribe((data) => {
    //     console.log(data);
    // });
    this.http
      .get('http://localhost:3000/api/v1/users/me', {
        headers: this.headers,
      })
      .subscribe((data) => {
        console.log(data);
      });

    // this.http
    //   .post<any>('http://localhost:3000/api/v1/users/create', {
    //     first_name: 'Jack',
    //     last_name: 'Hulen',
    //     email: 'test123@test.com',
    //     phone: '123456789',
    //     password: 'password',
    //     password_confirmation: 'password',
    //   })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }
}
