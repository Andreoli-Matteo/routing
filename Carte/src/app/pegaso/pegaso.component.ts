import { Component, OnInit } from '@angular/core';
import { Welcome7 } from '../pegaso/pegaso.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pegaso',
  templateUrl: './pegaso.component.html',
  styleUrls: ['./pegaso.component.css']
})
export class PegasoComponent implements OnInit {
  title = 'oooolaaaa';
  data !: Welcome7;
  pic = String;
  loading!: boolean;
  o !: Observable<Welcome7>;
  constructor(public http: HttpClient) {}


  ngOnInit(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<Welcome7>('https://api.scryfall.com/cards/named?fuzzy=pegaso-de-caballer%C3%ADa');
     this.o.subscribe(this.getData);
   }
  
    getData = (d : Welcome7) => {
      this.data = (d);
      this.loading = false;
    }
   
}
