import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supermarket-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  username;

  constructor() {}

  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('User')).username
  }
}
