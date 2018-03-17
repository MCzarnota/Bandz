import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/';
import {MatIconModule} from '@angular/material/';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-submission-form-next-step',
  templateUrl: './submission-form-next-step.component.html',
  styleUrls: ['./submission-form-next-step.component.scss']
})
export class SubmissionFormNextStepComponent implements OnInit {
  // group of form controls
  public userForm: FormGroup;
  trigger = false;
  @Input() accountType;
  email = new FormControl('', [Validators.required, Validators.email]);
  @Output() public submitSecondStepEvent = new EventEmitter();

  getErrorMessage() {
    // If email has not been submitted correctly, return an error
    return this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  closeSecondSubmissionForm() {
    // closes SecondStep submission window
    this.trigger = false;
    this.submitSecondStepEvent.emit(this.trigger);
  }
  send() {
    console.log(this.userForm.value);
  }

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      name: null,
      email: null
    });
    this.send();
   }

  ngOnInit() {
  }

}
