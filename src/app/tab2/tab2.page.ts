import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favoritos: any[];
  constructor(private list: ListService, private router:Router) {
    this.favoritos= this.list.getFavoritos();
  }


  openGameDetails(name: string) {
    this.router.navigate(['detail', name]);
  }

}
