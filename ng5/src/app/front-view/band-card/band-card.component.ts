import { Component, OnInit } from '@angular/core';
import {BandsDataService} from '../suggestions/bands.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';
import { AppServices } from './../suggestions/app.service';
import {bandDatabase} from './../suggestions/bandDatabase';

@Component({
  selector: 'app-band-card',
  templateUrl: './band-card.component.html',
  styleUrls: ['./band-card.component.scss'],
  providers:[BandsDataService,AppServices],
})
export class BandCardComponent implements OnInit {
  bandz = new AppServices;  
  constructor() { }

  ngOnInit() {
  }

}
