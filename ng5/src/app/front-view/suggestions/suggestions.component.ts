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

export class SuggestionsComponent implements OnInit {
  band= new AppServices;
  constructor() {
    }
 
  ngOnInit() {
   }
}
