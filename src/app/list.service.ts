import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  favoritos: any[]= [];

  constructor() { }

   addFavorito(favorito){
     this.favoritos.push(favorito);
   }

   getFavoritos(){
     return this.favoritos;
   }
}
