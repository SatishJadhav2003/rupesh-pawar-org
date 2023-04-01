import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:3000';


  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:3000/data');
  }
}
