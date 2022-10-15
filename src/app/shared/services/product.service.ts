import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  public getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/product/list');
  }
}
