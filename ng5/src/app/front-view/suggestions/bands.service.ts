import {Injectable} from '@angular/core';
import {IEvents} from '../../../interfaces/IEvents';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {URLSearchParams} from '@angular/http';
@Injectable()
export class BandsDataService {

private _bandsURL = 'http://localhost:3000/bands';
private perPage: string = '&per_page=10';
constructor(private http: Http) {}
getBands(searchQuery: string) {
  const search = new URLSearchParams();
  if (searchQuery === undefined) {
    searchQuery = '';
  }
  search.set('query', searchQuery);
  // get all the Bands from the server
  return this.http
  .get(this._bandsURL, {search}).map(res => {
    const results =  res.json();
    searchQuery = '';
    return results;
  });
}
private handleError(error: Response) {
  return Observable.throw(error.statusText);
}
}
