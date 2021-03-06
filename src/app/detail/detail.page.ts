import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ListService } from '../list.service';
import { IonSlides, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  information: any;
  favoritos: any;
  segment = 0;
  @ViewChild('slides') slider: IonSlides;
  @ViewChild(IonContent) content: IonContent;
  esFavorito: number;


  constructor(private activatedRoute: ActivatedRoute, private apiInfo: ApiService, private list: ListService) {
    this.favoritos= this.list.getFavoritos();
  }



  async ngOnInit(){
    this.getDetails();
    console.log(this.favoritos);
  }

  async getDetails() {
    try {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.information= await this.apiInfo.getDetails(id);
      this.information= this.information.games[0];
      this.esFavorito=this.favoritos.findIndex(element => element.id == this.information.id);

      console.log(this.information);
      console.log(this.esFavorito);
      // this.gameid = this.activatedRoute.snapshot.paramMap.get('id');
      // this.apiInfo.getDetails(this.gameid).subscribe(res => {
      //   this.games = res;
      // })
    } catch(error){
      console.log(error);
    }

    console.log(this.information);

  }

  addGame(){
    this.list.addFavorito(this.information);
    this.esFavorito = 0;
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
    this.goTop()
  }

  goTop() {
    this.content.scrollToTop(500)
  }






}
