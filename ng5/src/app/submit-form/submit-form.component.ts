import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  accountType = 'for a BANDZ account';
  fanIsChosen;
  venueIsChosen;
  bandIsChosen;
  hideSecondStep = true;
  isLoginFormVisible = false;
  trigger = false;
  @Output() public SubmitEvent = new EventEmitter();
  @Output() public submissionSecondStepEvent = new EventEmitter();
  @Output() public theTypeOfTheAccountEvent = new EventEmitter();
  closeSubmissionForm() {
    console.log('close it');
    // closes the submission form using 'x'
    this.trigger = false;
    this.SubmitEvent.emit(this.trigger);
  }
  showRegistrationForm(event) {
    console.log(event.target);
    const elementId: string = (event.target as Element).id;
    console.log('You clicked on registration event');
    // Regiser what type of account. Passed later to backend
    switch (elementId) {
      case 'fanCard':
        this.fanIsChosen = 1;
        this.accountType = 'as a fan ';
        this.submissionSecondStepEvent.emit(this.trigger);
        this.theTypeOfTheAccountEvent.emit(this.accountType);
        this.closeSubmissionForm();
        break;
      case 'bandCard':
        this.bandIsChosen = 2;
        this.accountType = 'as a band ';
        this.submissionSecondStepEvent.emit(this.trigger);
        this.theTypeOfTheAccountEvent.emit(this.accountType);
        this.closeSubmissionForm();
      break;
      case 'venueCard':
        console.log('venueCard');
        this.venueIsChosen = 3;
        this.accountType = 'as a venue manager ';
        this.submissionSecondStepEvent.emit(this.trigger);
        this.theTypeOfTheAccountEvent.emit(this.accountType);
        this.closeSubmissionForm();
        break;
      default:
    }
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
