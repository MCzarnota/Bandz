import { Component, OnInit } from '@angular/core';
import {BandsDataService} from '../suggestions/bands.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';
@Component({
  selector: 'app-band-card',
  templateUrl: './band-card.component.html',
  styleUrls: ['./band-card.component.scss'],
  providers:[BandsDataService],
})
export class BandCardComponent implements OnInit {
  band = new BandsDataService("Street Pieces","Brisbane","Alternative Rock",40,false,false);
  constructor() { }

  ngOnInit() {
  }

}
