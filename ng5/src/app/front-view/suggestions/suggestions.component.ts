import { Component, OnInit, Input, Output } from '@angular/core';
import { BandCardComponent} from '../band-card/band-card.component';
import {EventCardComponent} from '../event-card/event-card.component';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  
  // events:EventsDataService[];
  // constructor() {
  //   this.events =[
  //     new EventsDataService("Concert","Beaudesert Road","Red Lion",25,5,false,false),
  //     new EventsDataService("Concert","Beaudesert Road","Red Lion",25,5,false,false)
  // ]
  constructor(){}
  
  ngOnInit() {
  }

}
