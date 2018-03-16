import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  fanIsFlipped = false;
  venueIsFlipped = false;
  bandIsFlipped = false;
  isLoginFormVisible = false;
  trigger = false;
  @Output() public SubmitEvent = new EventEmitter();
  closeLoginForm() {
    this.trigger = false;
    this.SubmitEvent.emit(this.trigger);
  }
  flip(event) {
    const elementId: string = (event.target as Element).id;
    // Flips the card
    switch (elementId) {
      case 'fanCard':
        this.fanIsFlipped = true;
        this.bandIsFlipped = false;
        this.venueIsFlipped = false;
        break;
      case 'bandCard':
      this.fanIsFlipped = false;
      this.bandIsFlipped = true;
      this.venueIsFlipped = false;
      break;
      case 'venueCard':
      this.fanIsFlipped = false;
      this.bandIsFlipped = false;
      this.venueIsFlipped = true;
      break;
      default:
      console.log(event.srcElement.attributes.id);
    }
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
