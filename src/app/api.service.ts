import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string;
  key: string
  constructor(private http: HttpClient) {
    this.key= '&client_id=QyW5Bpn96a';
    this.baseUrl = 'https://api.boardgameatlas.com/api/search?'
  }

  getData(): Promise<any[]>{
    return this.http.get<any[]>(this.baseUrl + this.key).toPromise();
  }

  getGameByName(name: string): Promise<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'name='+ name + this.key).toPromise();
  }

}
