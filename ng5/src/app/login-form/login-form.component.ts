import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/';
import {MatIconModule} from '@angular/material/';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public username = '';
  public password = '';

  constructor(private router: Router) {
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
