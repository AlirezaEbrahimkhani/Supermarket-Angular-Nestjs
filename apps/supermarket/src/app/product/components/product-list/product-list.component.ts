import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { SharedService } from './../../../shared/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'supermarket-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private sharedService: SharedService, public dialog: MatDialog) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.sharedService.getProducts().subscribe((response: any) => {
      response.forEach((element) => {
        this.products.push(element);
      });
    });
  }

  onMoreInfo(item: Product) {
    this.dialog.open(ProductDetailComponent, {
      data: item,
      width: '30%',
      height: '61%',
    });
  }
}
