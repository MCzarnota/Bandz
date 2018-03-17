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
  public registrationForm: FormGroup;
  private readonly emailRegex = '..... ';
  trigger = false;
  @Input() accountType;
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
    // send the inputs value using JSON to the server
    console.log(this.registrationForm.value);
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  constructor(private readonly formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      email: [null, Validators.email],
      password: [null, Validators.required],
    });
   }

  ngOnInit() {
  }

}
