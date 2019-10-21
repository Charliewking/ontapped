import { Component } from '@angular/core';
import { Card } from '../app/models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ontapped';
  public temp: Card[] = [];

  constructor() {
    this.temp = [
      {name: 'card1', link: '#', text: 'This is Card 1}'},
      {name: 'card2', link: '#', text: 'This is Card 2}'},
    ];
   }




}
