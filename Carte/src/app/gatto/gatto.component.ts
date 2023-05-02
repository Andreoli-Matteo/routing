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
  [x: string]: any;
  gatto : Observable<Root[]> | undefined;
  constructor(public http: HttpClient) { }
  visualizza(): void{
   this.gatto = this.http.get<Root[]>('https://api.scryfall.com/cards/named?fuzzy=aust+com');
  }
  

  

}




