import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);

  private urlBase: string = 'https://fakestoreapi.com/products';

  //Función para obtener los productos
  getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase);
  }

  //Función para obtener un producto
  getProduct(id: number): Observable<IProduct>{
    return this._http.get<IProduct>(`${this.urlBase}/${id}`)
  }
}
