import { Component, OnInit, Input } from '@angular/core';
import { CardApiService } from 'src/app/services/card-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardService: CardApiService;

  @Input() name: string;
  @Input() text: string;
  @Input() link: string;

  


  ngOnInit() {

  }

}
