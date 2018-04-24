import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/Event';
import * as moment from 'moment';

@Pipe({
  name: 'orderByDate',
  pure: false
})
export class OrderByDatePipe implements PipeTransform {
    // @items the value on the left side of | being passed before transformation
    // @filter the value after :
    transform(items, filter) {
      if (filter === undefined) {
        return items;
      }
      // filter items array, items which match and return true will be kept,
      // false will be filtered out
      if (items) {
        return items.filter(event => {
          filter = moment(filter).format('L');
          if (filter === event.date) {
            return true;
          } else {
            return false;
          }
        });
      }
    }
  }
