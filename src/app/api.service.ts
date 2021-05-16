import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string;
  key: string
  constructor(private httpClient: HttpClientModule) {
    this.key= 'QyW5Bpn96a';
    this.baseUrl = `https://api.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=${this.key}`
  }

}
