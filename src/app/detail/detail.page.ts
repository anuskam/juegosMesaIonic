import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  information: any;


  constructor(private activatedRoute: ActivatedRoute, private apiInfo: ApiService) { }


  async ngOnInit(){
    this.getDetails();
  }

  async getDetails() {
    try {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.information= await this.apiInfo.getDetails(id);
      this.information= this.information.games[0];

      console.log(this.information);
      // this.gameid = this.activatedRoute.snapshot.paramMap.get('id');
      // this.apiInfo.getDetails(this.gameid).subscribe(res => {
      //   this.games = res;
      // })
    } catch(error){
      console.log(error);
    }

    console.log(this.information);

  }



  openWebsite() {
    window.open(this.information.Website, '_blank');
  }




}
