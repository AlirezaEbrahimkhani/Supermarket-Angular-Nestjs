import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'supermarket-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User;
  isLogin: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('Token')) {
      this.isLogin = true;
    }
    this.user = JSON.parse(localStorage.getItem('User'));
  }

  onLogout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('User')
    this.router.navigate(['/auth/login']);
  }
}
