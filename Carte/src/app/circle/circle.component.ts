import { Component, OnInit } from '@angular/core';
import { Welcome2 } from './circle.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit{
  title = 'oooolaaaa';
  data !: Welcome2;
  pic = String;
  loading!: boolean;
  o !: Observable<Welcome2>;
  constructor(public http: HttpClient) {}
  
  


   ngOnInit(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<Welcome2>('https://api.scryfall.com/cards/named?fuzzy=circle-of-protection:-blue');
     this.o.subscribe(this.getData);
   }
  
  
    getData = (d : Welcome2) => {
      this.data = (d);
      this.loading = false;
    }
}
