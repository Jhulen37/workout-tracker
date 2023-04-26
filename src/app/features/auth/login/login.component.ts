import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/auth/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    passwordConfirmation: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const user = {
        email: formValue.email,
        password: formValue.password,
        password_confirmation: formValue.passwordConfirmation,
      };
      console.log(user);
      this.userService.login(user);
    } else {
      // Show error messages
    }
  }
}
