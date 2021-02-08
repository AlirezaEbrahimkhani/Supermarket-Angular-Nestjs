import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { SharedService } from './../../../shared/services/shared.service';

@Component({
  selector: 'supermarket-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss'],
})
export class ManageProductsComponent implements OnInit {
  constructor(private sharedService: SharedService, private router: Router) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.products = [];
    this.sharedService.getProducts().subscribe((response: any) => {
      response.forEach((element) => {
        this.products.push(element);
      });
    });
  }

  onClick(item: Product, action) {
    switch (action) {
      case 1:
        this.router.navigate(['/admin/add-product'], {
          queryParams: { id: item._id },
        });
        break;
      case 2:
        this.sharedService.removeProduct(item._id).subscribe((response) => {
          this.getData();
        });
        break;
    }
  }
}
