import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  latitude = 51.67888;
  longitude = 70.12122;
  constructor() { }

  ngOnInit() {
  }

}
