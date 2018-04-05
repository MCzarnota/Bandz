import { Component, OnInit, Input, Injectable } from '@angular/core';
import {EventsDataService} from '../suggestions/events.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  providers:[EventsDataService]
})
@Injectable()
export class EventCardComponent implements OnInit {
  // events:EventsDataService[]
  
  // event = new EventsDataService( "Drunken Stupour","Mooroka","Red Lion",23,55,false,false);
  // events = [
  //   new EventsDataService( "Drunken Stupour","Mooroka","Red Lion",23,55,false,false),
  //   new EventsDataService( "Foundraising for Cancer Research","Townsville","Jam Corner",35,89,false,false)

  //  ]
 
  constructor() {
   
    }
  ngOnInit() {
  }

}
