import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatSelectModule
} from '@angular/material/';
import {
  MatIconModule
} from '@angular/material/';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import {
  ErrorStateMatcher
} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';

// /** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcherComponent implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-submission-form-next-step',
  templateUrl: './submission-form-next-step.component.html',
  styleUrls: ['./submission-form-next-step.component.scss']
})
export class SubmissionFormNextStepComponent implements OnInit {
  matcher = new MyErrorStateMatcherComponent();
  public account = {
    password: null
  };
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  // group of form controls
  public registrationForm: FormGroup;
  // checks for pattern => at least 1 letter, 1 number, 1 special
  private readonly emailRegex = '(?=\\D*\\d)(?=.*?[a-zA-Z]).*[\\W_].*';
  trigger = false;
  @Input() accountType;
  @Output() public submitSecondStepEvent = new EventEmitter();
  closeSecondSubmissionForm() {
    // closes SecondStep submission window
    this.trigger = false;
    this.submitSecondStepEvent.emit(this.trigger);
  }
  send() {
    // send the inputs value using JSON to the server
    console.log(this.registrationForm.value);
  }
  hasError(field: string, error: string) {
    // checks if the input is valid, return true if it's dirty(touched and then some input was typed)
    // , false if does not pass some of the validators
    const control = this.registrationForm.get(field);
    return control.hasError(error);
  }
  passwordMatchesEmail(passwordInput, emailInput) {
    // compare email input value with password input value.
    // return true if they are matched, false otherwise
    return (passwordInput === emailInput) ? true : false;
  }

  constructor(private readonly formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern(this.emailRegex)]],
      'color': 'warn'

    });
  }
  ngOnInit() {}

}
