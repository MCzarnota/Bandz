import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/';
import {MatIconModule} from '@angular/material/';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public username = '';
  public password = '';
  constructor() { }
  trigger = false;
  @Output() public LoginEvent = new EventEmitter();
  closeLoginForm() {
    this.trigger = false;
    this.LoginEvent.emit(this.trigger);
  }
  ngOnInit() {
  }

}
