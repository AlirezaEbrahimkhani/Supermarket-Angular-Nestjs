import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../../../product/components/product-detail/product-detail.component';
import { Product } from '../../../shared/models/product.model';
import { User } from '../../../shared/models/user.model';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'supermarket-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: Set<Product> = new Set<Product>();

  constructor(private adminService: AdminService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.adminService.getCartData().subscribe((response: User[]) => {
      const { products } = response[0];
      products.forEach((product: Product) => {
        this.products.add(product);
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

  onDeleteProduct(item) {
    let tempIDs = '';
    let tempProductIDs = [];
    this.products.delete(item);
    Array.from(this.products).forEach((product: Product) => {
      tempProductIDs.push(product._id);
    });
    tempIDs = tempProductIDs.join(',');
    this.adminService.updateCart(tempIDs).subscribe((response: any) => {
      console.log(response.Message);
    });
  }
}
