import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  baseUrl = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.baseUrl + '/products');
  }

  removeProduct(productID: string) {
    return this.http.delete(`${this.baseUrl}/products?productID=${productID}`);
  }

  getProdcut(productID) {
    return this.http.get(`${this.baseUrl}/products/${productID}`);
  }
}
