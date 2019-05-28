import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL : string = 'http://localhost:3000/products ';
  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable <IProduct[]> {
      return this.http.get<IProduct[]>(this.URL);
  }
}
