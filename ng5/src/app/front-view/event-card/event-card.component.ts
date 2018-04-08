<<<<<<< HEAD
import { Component, OnInit, Input, Injectable } from '@angular/core';
import {EventsDataService} from '../suggestions/events.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';
import { AppServices } from './../suggestions/app.service';
import {eventDatabase} from './../suggestions/eventDatabase';
import { CurrencyPipe } from '@angular/common';
=======
import { Component, OnInit, Input } from '@angular/core';
import {EventsDataService} from '../suggestions/events.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';
>>>>>>> e4437f1aa639aad67bf4e1768474378d207b21da

import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
<<<<<<< HEAD
  providers:[EventsDataService,AppServices]
=======
  providers: [EventsDataService]
>>>>>>> e4437f1aa639aad67bf4e1768474378d207b21da
})
@Injectable()
export class EventCardComponent implements OnInit {
<<<<<<< HEAD
  eventz = new AppServices;
  constructor() {
   
    }
=======
  event = new EventsDataService( 'Drunken Stupour', 'Mooroka', 'Red Lion', 23, 55, false, false);
  constructor() {}
>>>>>>> e4437f1aa639aad67bf4e1768474378d207b21da
  ngOnInit() {
  }

}

