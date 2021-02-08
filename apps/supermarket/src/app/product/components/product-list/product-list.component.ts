import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'supermarket-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productSrv: ProductService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.productSrv.getProducts().subscribe((response: any) => {
      response.forEach((element) => {
        this.products.push(element);
      });
    });
  }
}
