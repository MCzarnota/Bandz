<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import {EventsDataService} from '../suggestions/events.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';
=======
import {Component, OnInit} from '@angular/core';
>>>>>>> 9cbe23edf6fd1f8de19b9d2085a463ab395ba440

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  providers:[EventsDataService]
})
export class EventCardComponent implements OnInit {

<<<<<<< HEAD
  
  event = new EventsDataService( "Drunken Stupour","Mooroka","Red Lion",23,55,false,false);
  
  constructor() {
     
    }
=======
  constructor() {
  }

>>>>>>> 9cbe23edf6fd1f8de19b9d2085a463ab395ba440
  ngOnInit() {
  }

}
