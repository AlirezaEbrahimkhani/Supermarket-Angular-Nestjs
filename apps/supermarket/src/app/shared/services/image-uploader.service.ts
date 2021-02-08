import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageUploaderService {
  baseUrl = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  onUploadImage(keyWord: string, url: string, fileData: File) {
    const formData = new FormData();
    formData.append(keyWord, fileData, fileData.name);
    return this.http.post(this.baseUrl + url, formData);
  }
}
