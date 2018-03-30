import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.scss']
})
export class GigsComponent implements OnInit {
  isBand = true;
  isVenue = false;
  title = 'Street Pieces';
  location = 'Brisbane';
  genre = 'Rock';

  gigs = [
    // Order these by date please. Happens in the DB don't worry about it here
    {
      'name' : 'The Best Gig Ever',
      'venue' : 'Top Club',
      'city' : 'Brisbane',
      'date' : '12/05/2018',
      'thumbnail' : '../../assets/images/band3.jpg'
    },
    {
      'name' : 'Great Gig',
      'venue' : 'Metal Town',
      'city' : 'Sydney',
      'date' : '20/05/2018',
      'thumbnail' : '../../assets/images/band3.jpg'
    },
    {
      'name' : 'Jazz gig in Jazz town',
      'venue' : 'Jazz Club',
      'city' : 'Melbourne',
      'date' : '01/07/2018',
      'thumbnail' : '../../assets/images/band3.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
