import {Component, OnInit, Input, Output} from '@angular/core';
import {BandCardComponent} from '../band-card/band-card.component';
import {EventCardComponent} from '../event-card/event-card.component';
import * as events from 'events';
import { EventsDataService } from './events.service';
import { BandsDataService }from './bands.service';
import { AppServices } from './app.service';
import {bandDatabase} from './../suggestions/banddatabase';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
  providers:[EventsDataService,AppServices]
})
<<<<<<< HEAD
=======
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
>>>>>>> e4437f1aa639aad67bf4e1768474378d207b21da

export class SuggestionsComponent implements OnInit {
  band= new AppServices;
  constructor() {
    
   
  }
<<<<<<< HEAD
 
=======

>>>>>>> e4437f1aa639aad67bf4e1768474378d207b21da
  ngOnInit() {
   
  }

}
