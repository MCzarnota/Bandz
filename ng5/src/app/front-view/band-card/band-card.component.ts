<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {BandsDataService} from '../suggestions/bands.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';
=======
import {Component, OnInit} from '@angular/core';

>>>>>>> 9cbe23edf6fd1f8de19b9d2085a463ab395ba440
@Component({
  selector: 'app-band-card',
  templateUrl: './band-card.component.html',
  styleUrls: ['./band-card.component.scss'],
  providers:[BandsDataService],
})
export class BandCardComponent implements OnInit {
<<<<<<< HEAD
  band = new BandsDataService("Street Pieces","Brisbane","Alternative Rock",40,false,false);
  constructor() { }
=======

  constructor() {
  }
>>>>>>> 9cbe23edf6fd1f8de19b9d2085a463ab395ba440

  ngOnInit() {
  }

}
