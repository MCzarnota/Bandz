import { Component, OnInit, Input, Injectable } from '@angular/core';
import {EventsDataService} from '../suggestions/events.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';
import { AppServices } from './../suggestions/app.service';
import {eventDatabase} from './../suggestions/eventDatabase';
import { CurrencyPipe } from '@angular/common';

import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  providers: [EventsDataService, AppServices]
})
@Injectable()
export class EventCardComponent implements OnInit {
  eventz = new AppServices;
  constructor() {
    }
  ngOnInit() {
  }

}

