import {Component, OnInit, Input, Output} from '@angular/core';
import {BandCardComponent} from '../band-card/band-card.component';
import {EventCardComponent} from '../event-card/event-card.component';
import * as events from 'events';
import { EventsDataService } from './events.service';
import { BandsDataService }from './bands.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
  providers:[EventsDataService]
})
export class SuggestionsComponent implements OnInit {
 
  bands = [
    {
      'name': 'Drunk Donkey',
      'location': 'Moorooka',
      'image': '../assets/images/band1.jpg',
      'hot': true
    },
    {
      'name': 'Drunk Donkey',
      'location': 'Moorooka',
      'image': '../assets/images/band1.jpg',
      'hot': true
    },
    
    {
      'name': 'Drunk Donkey',
      'location': 'Moorooka',
      'image': '../assets/images/band1.jpg',
      'hot': true
    },
    {
      'name': 'Drunk Donkey',
      'location': 'Moorooka',
      'image': '../assets/images/band1.jpg',
      'hot': true
    },
    {
      'name': 'Drunk Donkey',
      'location': 'Moorooka',
      'image': '../assets/images/band1.jpg',
      'hot': true
    }
  ];
    // events=  [
    // {
    //   'name': 'DonkeyFest',
    //   'location': 'Moorooka',
    //   'cost': '$28',
    //   'attending': 32,
    //   'image': '../assets/images/band1.jpg'
    // },];
    demo = "blabla";
    events = [
        new EventsDataService( "Drunken Stupour","Mooroka","Red Lion",23,55,false,false),
        new EventsDataService( "Foundraising for Cancer Research","Townsville","Jam Corner",35,89,false,false)
    
       ]
  eventName = events[1].getEventName();
  
  constructor() {
    
  
  }

  ngOnInit() {
  }

}
