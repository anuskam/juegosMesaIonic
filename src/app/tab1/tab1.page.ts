import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  games: any;
  searchWord: string
  searchResults: any

  constructor(private apiInfo: ApiService, private router:Router) {
  }

  async ngOnInit(){
    this.getGames();
  }

  async onChangeSearch(event){
    try{
      this.searchResults = await this.apiInfo.getGameByName(event.target.value);
      this.searchResults = this.searchResults.games;
      this.games = this.searchResults;

      } catch(error){
        console.log(error);
      }
  }

  async getGames(){
    try{
      this.games = await this.apiInfo.getData();
      this.games = this.games.games;
      } catch(error){
        console.log(error);
      }
  }


  openGameDetails(name: string) {
    this.router.navigate(['detail', name]);
  }


  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark')
    }else{
      document.body.setAttribute('color-theme', 'light')
    }
  }



}
