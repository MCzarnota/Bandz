import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { BandsDataService } from '../front-view/suggestions/bands.service';
import {ChatBoxComponent} from '../bandProfile/chat-box.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class BandProfileComponent implements OnInit {
  bandCampLink = 'https://bandcamp.com/EmbeddedPlayer/album=77046358/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/';
  band;
  searching: Boolean = false;
  isBand = true;
  isVenue = false;
  rateDropDown = false;
  gigs = [
    // Order these by date please. Happens in the DB don't worry about it here
    {
      'name': 'The Best Gig Ever',
      'venue': 'Top Club',
      'city': 'Brisbane',
      'date': '12/05/2018',
      'thumbnail': '../../assets/images/band3.jpg'
    },
    {
      'name': 'Great Gig',
      'venue': 'Metal Town',
      'city': 'Sydney',
      'date': '20/05/2018',
      'thumbnail': '../../assets/images/band3.jpg'
    },
    {
      'name': 'Jazz gig in Jazz town',
      'venue': 'Jazz Club',
      'city': 'Melbourne',
      'date': '01/07/2018',
      'thumbnail': '../../assets/images/band3.jpg'
    }
  ];
  showContent = true;
  showGigs = false;

  rate() {
    // console.log('Rate');
    this.rateDropDown = !this.rateDropDown;
  }

  constructor(private bandService: BandsDataService,
     private activedRoute: ActivatedRoute,
     private router: Router) {
  }

  public ngOnInit() {
    const bandId = this.activedRoute.snapshot.params['bandId'];
    this.getBand(bandId);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
}

  getBand(bandId) {
    this.bandService.getBandbyId(bandId).subscribe(data => {
      this.band =  data;
      console.log(this.band);
  }, error => console.log(error),
  () => {
    this.searching = false;
    console.log('Band' + bandId +  ' fetched completed');
  }
);

  }

  toggleContentGigs() {
    this.showContent = !this.showContent;
    this.showGigs = !this.showGigs;
  }

}
