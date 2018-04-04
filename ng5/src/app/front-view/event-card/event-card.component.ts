import { Component, OnInit, Input } from '@angular/core';
import {EventsDataService} from '../suggestions/events.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  providers: [EventsDataService]
})
export class EventCardComponent implements OnInit {
  event = new EventsDataService( 'Drunken Stupour', 'Mooroka', 'Red Lion', 23, 55, false, false);
  constructor() {}
  ngOnInit() {
  }

}
