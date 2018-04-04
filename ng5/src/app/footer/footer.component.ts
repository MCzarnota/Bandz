<<<<<<< HEAD:ng5/src/app/front-view/footer/footer.component.ts
import { Component, OnInit, Inject, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SubmitFormComponent} from '../../submit-form/submit-form.component';
import {HeaderComponent} from '../../header/header.component';
=======
import {Component, OnInit} from '@angular/core';
>>>>>>> 9cbe23edf6fd1f8de19b9d2085a463ab395ba440:ng5/src/app/footer/footer.component.ts

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() public SubmitEvent = new EventEmitter();
  submitTrigger = false;
  

<<<<<<< HEAD:ng5/src/app/front-view/footer/footer.component.ts
  openSubmitForm() {
    // sends an event emitter to the AppComponent to show the Submit window
    this.submitTrigger = true;
    this.SubmitEvent.emit(this.submitTrigger);
  }
  constructor() { }
=======
  constructor() {
  }
>>>>>>> 9cbe23edf6fd1f8de19b9d2085a463ab395ba440:ng5/src/app/footer/footer.component.ts

  ngOnInit() {
  }

}
