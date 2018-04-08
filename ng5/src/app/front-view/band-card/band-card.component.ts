import { Component, OnInit } from '@angular/core';
import {BandsDataService} from '../suggestions/bands.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';
<<<<<<< HEAD
import { AppServices } from './../suggestions/app.service';
import {bandDatabase} from './../suggestions/bandDatabase';

=======
>>>>>>> e4437f1aa639aad67bf4e1768474378d207b21da
@Component({
  selector: 'app-band-card',
  templateUrl: './band-card.component.html',
  styleUrls: ['./band-card.component.scss'],
<<<<<<< HEAD
  providers:[BandsDataService,AppServices],
})
export class BandCardComponent implements OnInit {
  bandz = new AppServices;  
=======
  providers: [BandsDataService],
})
export class BandCardComponent implements OnInit {
  band = new BandsDataService('Street Pieces', 'Brisbane', 'Alternative Rock', 40, false, false);
>>>>>>> e4437f1aa639aad67bf4e1768474378d207b21da
  constructor() { }

  ngOnInit() {
  }

}
