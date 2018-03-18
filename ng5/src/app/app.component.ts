import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isSubmitActive = false;
  isLoginActive = false;
  isAccountChosen = false;
  accountType = '';
  title = 'app';
}