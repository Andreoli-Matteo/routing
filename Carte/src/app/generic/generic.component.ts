import { Component } from '@angular/core';
import { Root } from '../gatto/gatto.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  
  chiama!: String | null
  data: Root | undefined;
  loading: boolean | undefined;
  obs_chiama : Observable<Root> | undefined;
  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    this.chiama = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (this.chiama); 
    this.obs_chiama = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=' + this.chiama);
    this.obs_chiama.subscribe(this.getData)
  }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   }
}
