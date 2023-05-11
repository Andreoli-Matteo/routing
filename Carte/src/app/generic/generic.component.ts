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
  
  carta!: String | null
  data: Root | undefined;
  loading: boolean | undefined;
  obs_carta : Observable<Root> | undefined;
  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  

   
    //Ogni volta che viene invocata la route tracks/:id, l'observable paramMap richiama questo metodo
    getRouterParam = (params: ParamMap) =>
    {
      let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
      console.log (uri_param); //Stampo su console
      //this.service.getTrack()
      if (uri_param == 'circle-of-protection:-blue') this.carta = 'https://api.scryfall.com/cards/named?fuzzy=circle-of-protection:-blue';
    console.log (this.carta); 
    
      }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   }
}
