import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

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

  addToCart(productID) {
    return this.http.post(`${this.baseUrl}/cart`, null, {
      params: { productID: productID, delFlage: '0' },
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    });
  }
}
