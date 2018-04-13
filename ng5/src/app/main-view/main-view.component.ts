import {Component, OnInit} from '@angular/core';
import { Http, Headers} from '@angular/http';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  latitude = 51.67888;
  longitude = 70.12122;
  getPayment() {
   this.http.post(
      'http://localhost:3000/pay/5acffae75031cb16a0e93693', {}
    )
    .map((data: any) => data.json())
    .subscribe(data => {
      // redirect to paypal
      window.location.href = data.links[1].href;
    });
  }
  constructor( private http: Http) {
  }

  ngOnInit() {
  }

}
