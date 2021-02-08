import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supermarket-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  username;
  isLogin: boolean;

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('Token')) {
      this.isLogin = true;
    }
    this.username = JSON.parse(localStorage.getItem('User')).username;
  }
}
