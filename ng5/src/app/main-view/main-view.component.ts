import {Component, OnInit, Input,  ViewChild, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import {MatButtonModule} from '@angular/material/button';
import {SuggestionsComponent} from '../front-view/suggestions/suggestions.component';
import {BandCardComponent} from '../front-view/band-card/band-card.component';
import {EventCardComponent} from '../front-view/event-card/event-card.component';
import {EventsDataService} from '../front-view/suggestions/events.service';
import {IEvents} from '../../interfaces/IEvents';
import { ControlPosition } from '@agm/core/services/google-maps-types';
import * as $ from 'jquery';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {SliderModule} from 'primeng/slider';
import {OrderByDatePipe } from '../../pipes/order-by-date.pipe';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  providers: []
})
export class MainViewComponent  implements OnInit {
   rangeValues: number[] = [20, 80];
  @ViewChild('picker') picker;
  @Input() selected: string;
  isButtonChangePickerActive = false;
  isValueSliderActive = false;
  latitude: Number = -27.46888;
  longitude: Number = 153.02122;
  public events;
  inputActive = false;
  active = false;
  markerActive = false;
  public fixed: Boolean = false;
  onMapReady(map) {
    map.setOptions({
      zoomControl: true,
      zoomControlOptions: {
        style: 'LARGE',
      position: ControlPosition.TOP_LEFT
  },
    streetViewControl: false
  });
    }
  changeActive() {
    // When the user activates input. Show the additional window
    this.inputActive = !this.inputActive;
  }
  isActive() {
    // Checks if the window is active
    return this.inputActive;
  }
 constructor( private eventService: EventsDataService) {
 }
  ngOnInit() {
    this.getEvents();
  }
  getEvents() {
    return this.eventService.getEvents().subscribe(data => {
      this.events = data.events;
      console.log(this.events);
      console.log(typeof(this.events[0].date));
  });
}
  openDatePicker() {
    this.picker.open();
    this.isButtonChangePickerActive = true;
  }
  openValueSlider() {
    this.isValueSliderActive = true;
  }
}
@Component({
  selector: 'main-band-suggestions',
  templateUrl: '../front-view/band-card/band-card.component.html',
  styleUrls: ['./main-view.component.scss'],
  providers: []
})
export class MainBandSuggestionsComponent extends BandCardComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {}
}

// Jquery operating the map changes when scrolling
let fixed = false;
$(document).scroll(function() {
  if ($(this).scrollTop() >= 200) {
    if (!fixed) {
      fixed = true;
      $('.mapContainer').removeClass('normal');
      $('.mapContainer').addClass('fixed'); // Or set top:20px; in CSS
    }
  } else {
    if (fixed) {
      fixed = false;
      $('.mapContainer').removeClass('fixed');
      $('.mapContainer').addClass('normal');
    }
  }
});
