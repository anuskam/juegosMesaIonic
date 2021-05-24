import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string;
  key: string
  params: string;
  constructor(private http: HttpClient) {
    this.key= '&client_id=QyW5Bpn96a';
    this.baseUrl = 'https://api.boardgameatlas.com/api/search?';
    this.params = '&limit=30';
  }

  getData(): Promise<any[]>{
    return this.http.get<any[]>(this.baseUrl + this.key).toPromise();
  }

  getGameByName(name: string): Promise<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'name='+ name + this.key + this.params).toPromise();
  }

  getDetails(id): Promise<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'ids=' + id + this.key).toPromise();
  }

}
