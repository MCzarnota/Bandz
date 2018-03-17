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
  closeSubmissionForm() {
    // closes the submission form using 'x'
    this.trigger = false;
    this.SubmitEvent.emit(this.trigger);
  }
  showRegistrationForm(event) {
    const elementId: string = (event.target as Element).id;
    // Regiser what type of account. Passed later to backend
    console.log(elementId);
    switch (elementId) {
      case 'fanCard':
        this.fanIsChosen = 1;
        this.accountType = 'as a fan ';
        break;
      case 'bandCard':
        this.bandIsChosen = 2;
        this.accountType = 'as a band ';
      break;
      case 'venueCard':
        this.venueIsChosen = 3;
        this.accountType = 'as a venue manager ';
        break;
      default:
      this.accountType = 'for a BANDZ account';
      this.submissionSecondStepEvent.emit(this.trigger);
      this.closeSubmissionForm();
    }
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
