import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.baseUrl + '/products');
  }
}
