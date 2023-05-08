import { Component, Input } from '@angular/core';
import { Root} from './gatto.model';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gatto',
  templateUrl: './gatto.component.html',
  styleUrls: ['./gatto.component.css']
})
export class GattoComponent {
  title = 'oooolaaaa';
  data! : Root;
  pic = String;
  loading!: boolean;
  o = new Observable<Object>;
  constructor(public http: HttpClient) {}


   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get('https://api.scryfall.com/cards/named?fuzzy=aust+com');
     this.o.subscribe(this.getData);
   }
  
    getData = (d: Object) => {
      this.data = d;
      this.loading = false;
    }
   
 
  

  

}




