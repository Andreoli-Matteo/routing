import { Component, OnInit } from '@angular/core';
import { Welcome9 } from './drago.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-drago',
  templateUrl: './drago.component.html',
  styleUrls: ['./drago.component.css']
})
export class DragoComponent implements OnInit {
  title = 'oooolaaaa';
  data !: Welcome9;
  pic = String;
  loading!: boolean;
  o !: Observable<Welcome9>;
  constructor(public http: HttpClient) {}


  ngOnInit(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<Welcome9>('https://api.scryfall.com/cards/named?fuzzy=azure-drake');
     this.o.subscribe(this.getData);
   }
  
    getData = (d : Welcome9) => {
      this.data = (d);
      this.loading = false;
    }
   
}
