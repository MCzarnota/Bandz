<<<<<<< HEAD
import { Component, OnInit, Inject, Output, HostListener } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material";
import { AgmCoreModule } from "@agm/core";
import { MatButtonModule } from "@angular/material/button";
import { AppServices } from "../front-view/suggestions/app.service";
import { eventDatabase } from "../front-view/suggestions/eventDatabase";
import { SuggestionsComponent } from "../front-view/suggestions/suggestions.component";
import { BandCardComponent } from "../front-view/band-card/band-card.component";
import { EventCardComponent } from "../front-view/event-card/event-card.component";
import { bandDatabase } from "../front-view/suggestions/bandDatabase";
import { DOCUMENT } from "@angular/platform-browser";
import * as $ from "jquery";

=======
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material';
import { AgmCoreModule,  } from '@agm/core';
import {MatButtonModule} from '@angular/material/button';
import { AppServices } from '../front-view/suggestions/app.service';
import {eventDatabase} from '../front-view/suggestions/eventDatabase';
import {SuggestionsComponent} from '../front-view/suggestions/suggestions.component';
import {BandCardComponent} from '../front-view/band-card/band-card.component';
import {EventCardComponent} from '../front-view/event-card/event-card.component';
import {bandDatabase} from '../front-view/suggestions/bandDatabase';
import * as $ from 'jquery';
>>>>>>> 0cf4ff7d9d6a51b4a3ba5a04b58a7ba09cf95ddb
@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
  providers: [AppServices]
})
<<<<<<< HEAD
export class MainViewComponent implements OnInit {
  latitude: number = -27.46888;
  longitude: number = 153.02122;
  inputActive = false;
  active = false;
  bandz = new AppServices();
  eventz = new AppServices();
  public fixed: boolean = false;
=======
export class MainViewComponent  implements OnInit {
  latitude: Number = -27.46888;
  longitude: Number = 153.02122;
  markers = eventDatabase.Json.events;
  inputActive = false;
  active = false;
  bandz = new AppServices;
  eventz = new AppServices;
  public fixed: Boolean = false;
>>>>>>> 0cf4ff7d9d6a51b4a3ba5a04b58a7ba09cf95ddb
  changeActive() {
    // When the user activates input. Show the additional window
    console.log("Yo clicked on this" + this.inputActive);
    this.inputActive = !this.inputActive;
  }
  isActive() {
    // Checks if the window is active
    return this.inputActive;
  }
<<<<<<< HEAD
  constructor() {}

  ngOnInit() {}
=======
 constructor() {}
  ngOnInit() {
    console.log(this.markers);
  }

>>>>>>> 0cf4ff7d9d6a51b4a3ba5a04b58a7ba09cf95ddb
}
@Component({
  selector: "main-event-suggestions",
  templateUrl: "../front-view/event-card/event-card.component.html",
  styleUrls: ["./main-view.component.scss"],
  providers: [AppServices]
})
export class MainEventSuggestionsComponent extends EventCardComponent
  implements OnInit {
  eventz = new AppServices();
  constructor() {
    super();
  }

  ngOnInit() {}
}
@Component({
  selector: "main-band-suggestions",
  templateUrl: "../front-view/band-card/band-card.component.html",
  styleUrls: ["./main-view.component.scss"],
  providers: [AppServices]
})
<<<<<<< HEAD
export class MainBandSuggestionsComponent extends BandCardComponent
  implements OnInit {
  bandz = new AppServices();
=======
export class MainBandSuggestionsComponent extends BandCardComponent implements OnInit {
  bandz = new AppServices;
>>>>>>> 0cf4ff7d9d6a51b4a3ba5a04b58a7ba09cf95ddb
  constructor() {
    super();
  }

  ngOnInit() {}
}

<<<<<<< HEAD
//Jquery operating the map changes when scrolling
var fixed = false;
=======
// Jquery operating the map changes when scrolling
let fixed = false;
>>>>>>> 0cf4ff7d9d6a51b4a3ba5a04b58a7ba09cf95ddb
$(document).scroll(function() {
  if ($(this).scrollTop() >= 200) {
    if (!fixed) {
      fixed = true;
<<<<<<< HEAD
      $(".mapContainer").removeClass("normal");
      $(".mapContainer").addClass("fixed"); // Or set top:20px; in CSS
    } 
  } else {
    if (fixed) {
      fixed = false;
      $(".mapContainer").removeClass("fixed");
      $(".mapContainer").addClass("normal");
    }
  }
});
=======
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
>>>>>>> 0cf4ff7d9d6a51b4a3ba5a04b58a7ba09cf95ddb
