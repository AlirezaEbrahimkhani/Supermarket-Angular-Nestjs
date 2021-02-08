import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'supermarket-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickCard(index) {
    switch (index) {
      case 1:
        this.router.navigate(['/admin/add-product']);
        break;
      case 2:
        this.router.navigate(['/admin/manage-products']);
        break;
      case 3:
        localStorage.removeItem('Token');
        this.router.navigate(['/auth/login']);
        break;
    }
  }
}
