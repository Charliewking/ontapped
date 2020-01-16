import { Component } from '@angular/core';
import { Card } from '../app/models/interfaces';
import { CardApiService } from './services/card-api.service';
import { getCard } from './services/card-api.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardService: CardApiService;

  title = 'ontapped';
  public card: Card;

  constructor() {
    
  }

  lookupCard(name: string) {
    store.dispatch(getCard({ name: name }));
  }

}
