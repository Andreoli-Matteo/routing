import { Component, OnInit } from '@angular/core';
import { Welcome10 } from './ancient.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ancient',
  templateUrl: './ancient.component.html',
  styleUrls: ['./ancient.component.css']
})
export class AncientComponent implements OnInit{
  title = 'oooolaaaa';
  data !: Welcome10;
  pic = String;
  loading!: boolean;
  o !: Observable<Welcome10>;
  constructor(public http: HttpClient) {}


  ngOnInit(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<Welcome10>('https://api.scryfall.com/cards/named?fuzzy=ancient-greenwarden');
     this.o.subscribe(this.getData);
   }
  
    getData = (d : Welcome10) => {
      this.data = (d);
      this.loading = false;
    }
}
