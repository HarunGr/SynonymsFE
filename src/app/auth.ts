import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'https://synonymapp-fwgvdcdnhecxd2hx.westeurope-01.azurewebsites.net/api/v1';
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, { username, password }, {responseType: 'text'});
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { username, password });
  }
}