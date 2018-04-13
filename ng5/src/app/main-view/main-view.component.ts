import {Component,OnInit,Inject,Output, HostListener} from '@angular/core';
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
import{bandDatabase} from '../front-view/suggestions/bandDatabase';
import { DOCUMENT } from "@angular/platform-browser";
import * as $ from "jquery";

var fixed =false;
// $(document).ready(function() {
//      var stickyMap= $(".mapContainer").offset().top;
//      var stickyNav = function(){
//       var scrollTop = $(window).scrollTop(); 
//       if (scrollTop > stickyMap) { 
//           $(".mapContainer").addClass('fixed');
//       } else {
//           $(".mapContainer").removeClass('fixed'); 
//       }
//   };
// stickyNav();
//   $(window).scroll(function() {
//     stickyNav();
//   });
// });
$(document).scroll(function() {
  if( $(this).scrollTop() >= 200 ) {
      if( !fixed ) {
          fixed = true;
          $('.mapContainer').removeClass('normal');
          $('.mapContainer').addClass('fixed'); // Or set top:20px; in CSS
      }                                           // It won't matter when static
  } else {
      if( fixed ) {
          fixed = false;
          $('.mapContainer').removeClass('fixed');
          $('.mapContainer').addClass('normal');
      }
  }
});
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  providers:[AppServices]
})
export class MainViewComponent  implements OnInit {
  title = "jquert test";
  latitude:number = -27.46888;
  longitude:number = 153.02122;
  inputActive = false;
  active = false;
  bandz= new AppServices;
  eventz = new AppServices;
  public fixed:boolean = false;
  changeActive() {
    // When the user activates input. Show the additional window
    console.log('Yo clicked on this' + this.inputActive);
    this.inputActive = !this.inputActive;
  }
  isActive() {
    // Checks if the window is active
    return this.inputActive;
  }
 constructor(){

 }


  ngOnInit() {
  }
  
}
@Component({
  selector: 'main-event-suggestions',
  templateUrl: '../front-view/event-card/event-card.component.html',
  styleUrls: ['./main-view.component.scss'],
  providers:[AppServices]
})

export class MainEventSuggestionsComponent extends EventCardComponent implements OnInit {
  eventz= new AppServices;
  constructor() {
    super();
    }
 
  ngOnInit() {
   }
}
@Component({
  selector: 'main-band-suggestions',
  templateUrl: '../front-view/band-card/band-card.component.html',
  styleUrls: ['./main-view.component.scss'],
  providers:[AppServices]
})

export class MainBandSuggestionsComponent extends BandCardComponent implements OnInit {
  bandz= new AppServices;
  constructor() {
    super();
    }
 
  ngOnInit() {
   }
}

