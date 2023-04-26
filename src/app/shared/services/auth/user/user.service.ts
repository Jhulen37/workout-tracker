import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private cookie: CookieService) {}

  getUser() {
    return this.userSubject;
  }

  // autoLogin(){
  //   const token=this.cookie.get('token')
  //   if(!token){
  //     return
  //   }
  //   this.get
  // }

  getWorkouts() {
    const token = this.cookie.get('token');
    if (!token) {
      return;
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(
      'http://localhost:3000/api/v1/users/favorite_workouts',
      {
        headers: headers,
      }
    );
  }

  login(user) {
    console.log(user, 'wad');
    this.http
      .post('http://localhost:3000/api/v1/users/login', user)
      .subscribe((data: any) => {
        console.log(data);
        this.cookie.set('token', data.payload.token.value);
        this.userSubject.next(data.payload.user);
      });
  }

  signUp() {
    this.http
      .post<any>('http://localhost:3000/api/v1/users/create', {
        first_name: 'Jack',
        last_name: 'Hulen',
        email: 'test123@test.com',
        phone: '123456789',
        password: 'password',
        password_confirmation: 'password',
      })
      .subscribe((data) => {
        console.log(data);
      });
  }

  currentUser() {
    const token = this.cookie.get('token');
    if (!token) {
      return;
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.http
      .get('http://localhost:3000/api/v1/users/me', {
        headers: headers,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.userSubject.next(data.payload);
      });
  }
}
