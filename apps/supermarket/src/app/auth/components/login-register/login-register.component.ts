import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../shared/auth.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'supermarket-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  selectedIndex = 0;
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  registerForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.authService
      .login(this.loginForm.value)
      .subscribe(({ accessToken }: any) => {
        if (accessToken) {
          localStorage.setItem('Token', accessToken);
          localStorage.setItem('User', JSON.stringify(jwt_decode(accessToken)));
          this.router.navigate(['/home']);
        }
      });
  }

  onRegisterSubmit() {
    let user: User = this.registerForm.value;
    user.roleID = 3;
    this.authService.register(user).subscribe(({ Success }: any) => {
      if (Success) {
        this.selectedIndex = 0;
      }
    });
  }

  onCancel() {
    this.selectedIndex = 0;
  }

  onCreateAcc() {
    this.selectedIndex = 1;
  }
}
