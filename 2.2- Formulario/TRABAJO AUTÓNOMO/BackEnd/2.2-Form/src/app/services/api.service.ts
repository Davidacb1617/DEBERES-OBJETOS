import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  createEmployee<T>(item: T): Observable<T> {
    return this.http.post<T>(`${this.url}/employees`, item);
  }

  createProduct<T>(item: T): Observable<T> {
    return this.http.post<T>(`${this.url}/products`, item);
  }

  updateProduct(id: string, item: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/products/${id}`, item);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/products/${id}`);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/products`);
  }
}
