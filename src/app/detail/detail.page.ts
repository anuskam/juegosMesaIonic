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

      this.apiInfo.getDetails(id).then(result => {
        console.log('details: ', result);
        this.information = result;
      })
      console.log(this.information);
      // this.gameid = this.activatedRoute.snapshot.paramMap.get('id');
      // this.apiInfo.getDetails(this.gameid).subscribe(res => {
      //   this.games = res;
      // })
    } catch(error){
      console.log(error);
    }

  }



  openWebsite() {
    window.open(this.information.Website, '_blank');
  }




}
