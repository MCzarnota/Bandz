import {Component, OnInit, Input, Output} from '@angular/core';
import {BandCardComponent} from '../band-card/band-card.component';
import {EventCardComponent} from '../event-card/event-card.component';
import * as events from 'events';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
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

  events = [
    {
      'name': 'DonkeyFest',
      'location': 'Moorooka',
      'cost': '$28',
      'attending': 32
    },
    {
      'name': 'DonkeyFest',
      'location': 'Moorooka',
      'cost': '$28',
      'attending': 32
    },
    {
      'name': 'DonkeyFest',
      'location': 'Moorooka',
      'cost': '$28',
      'attending': 32
    },
    {
      'name': 'DonkeyFest',
      'location': 'Moorooka',
      'cost': '$28',
      'attending': 32
    },
    {
      'name': 'DonkeyFest',
      'location': 'Moorooka',
      'cost': '$28',
      'attending': 32
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
