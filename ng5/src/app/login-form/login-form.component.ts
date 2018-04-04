import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/';
import {MatIconModule} from '@angular/material/';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm} from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  private readonly emailRegex = '(?=\\D*\\d)(?=.*?[a-zA-Z]).*[\\W_].*';
  public username = '';
  public password = '';
  public  greeting = {};
  constructor(private router: Router, private readonly formBuilder: FormBuilder,
              private http: HttpClient) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern(this.emailRegex)]]
    });
  }

  trigger = false;
  isLoginPassed = false;
  @Output() public LoginEvent = new EventEmitter();

  closeLoginForm() {
    this.trigger = false;
    this.LoginEvent.emit(this.trigger);
  }

  goMain() {
    // redirects to main view
    // To do: change log in <a> in header to a  profile account component
    // after successful authentication, add server validation
    this.isLoginPassed = !this.isLoginPassed;
    this.router.navigate(['main']);
  }

  ngOnInit() {
  }

}
