import {Injectable} from '@angular/core';
import {IEvents} from '../../../interfaces/IEvents';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class EventsDataService {

  private _eventsURL = 'http://localhost:3000/events';

constructor(private http: Http) {}
getEvents() {
  // get all the Events from the server
  return this.http
  .get(this._eventsURL).map(res => {
    const results =  res.json();
    return results;
  });
}
private handleError(error: Response) {
  return Observable.throw(error.statusText);
}
}
