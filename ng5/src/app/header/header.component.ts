import { Component, OnInit, Inject, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SubmitFormComponent} from '../submit-form/submit-form.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  submitTrigger = false;
  loginTrigger = false;
  @Output() public SubmitEvent = new EventEmitter();
  @Output() public LoginEvent = new EventEmitter();
  openSubmitForm() {
    // sends an event emitter to the AppComponent to show the Submit window
    this.submitTrigger = true;
    this.SubmitEvent.emit(this.submitTrigger);
  }
  openLoginForm() {
    // sends an event emitter to the AppComponent to show the Login window
    this.loginTrigger = true;
    this.LoginEvent.emit(this.loginTrigger);
  }
  constructor() {}
  ngOnInit() {
  }
  }