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
<<<<<<< HEAD
  
  // events:EventsDataService[];
  // constructor() {
  //   this.events =[
  //     new EventsDataService("Concert","Beaudesert Road","Red Lion",25,5,false,false),
  //     new EventsDataService("Concert","Beaudesert Road","Red Lion",25,5,false,false)
  // ]
  constructor(){}
  
=======

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
      'attending': 32,
      'image': '../assets/images/band1.jpg'
    },
    {
      'name': 'DonkeyFest',
      'location': 'Moorooka',
      'cost': '$28',
      'attending': 32,
      'image': '../assets/images/band1.jpg'
    },
    {
      'name': 'DonkeyFest',
      'location': 'Moorooka',
      'cost': '$28',
      'attending': 32,
      'image': '../assets/images/band1.jpg'
    },
    {
      'name': 'DonkeyFest',
      'location': 'Moorooka',
      'cost': '$28',
      'attending': 32,
      'image': '../assets/images/band1.jpg'
    },
    {
      'name': 'DonkeyFest',
      'location': 'Moorooka',
      'cost': '$28',
      'attending': 32,
      'image': '../assets/images/band1.jpg'
    }
  ];

  constructor() {
  }

>>>>>>> 9cbe23edf6fd1f8de19b9d2085a463ab395ba440
  ngOnInit() {
  }

}
