import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SynonymsService {
  private baseUrl = 'https://synonymapp-fwgvdcdnhecxd2hx.westeurope-01.azurewebsites.net/api/v1'; // Azure Function app base URL
  constructor(private http: HttpClient) {}

  private authHeaders() {
    const token = localStorage.getItem('auth_token') || '';
    return { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) };
  }

  getSynonyms(word: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/synonyms/${word}`, this.authHeaders());
  }

  addSynonym(word: string, synonym: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/synonyms`, { word, synonym }, this.authHeaders());
  }
}