import { Component, OnInit, Input,Output } from '@angular/core';
import { BandCardComponent} from '../suggestions/band-card/band-card.component';
import {EventCardComponent} from '../suggestions/event-card/event-card.component';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
