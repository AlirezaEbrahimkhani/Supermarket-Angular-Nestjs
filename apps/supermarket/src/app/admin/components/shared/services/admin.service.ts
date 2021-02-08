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
}
