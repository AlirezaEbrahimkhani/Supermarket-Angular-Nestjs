import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'apps/supermarket/src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  addProducts(product: Product) {
    return this.http.post(this.baseUrl + '/products', product, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    });
  }

  updateProduct(product: Product, prodcutID: string) {
    return this.http.patch(`${this.baseUrl}/products/${prodcutID}`, product);
  }

  getCartData() {
    return this.http.get(this.baseUrl + '/cart', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    });
  }

  updateCart(productIDs) {
    return this.http.post(`${this.baseUrl}/cart`, null, {
      params: { productID: productIDs, delFlage: '1' },
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    });
  }
}
