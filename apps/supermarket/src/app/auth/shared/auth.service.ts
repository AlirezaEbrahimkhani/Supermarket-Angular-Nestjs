import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(this.baseUrl + '/auth/register', user);
  }

  login(user: User) {
    return this.http.post(this.baseUrl + '/auth/login', user);
  }
}
