import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  isBand = true;
  isVenue = false;
  title = 'Street Pieces';
  banner = 'cover url("../../assets/images/band.jpg") no-repeat center';
  bio = 'Street Pieces formed in 2012 and soon began playing across their home state. After cutting their teeth on the live circuit they ' +
    'released their first EP featuring ‘Run’, earning them a support slot for Wolfmother and the title of ‘best band in Brisbane’ from' +
    ' Ugly Phil of Triple M. Coming off the success of their first single and a string of blistering live shows Street Pieces entered the' +
    ' studio with Jeff Lovejoy (Powderfinger, Tex Perkins) and released ‘Sacrifice’ (2015) and ‘Bad Kind of Woman’ (2016) which soon had' +
    ' them back on the road with rock heavyweights Shihad (NZ), The Bellrays (US) and Richie Ramone (US). This year with new bassist Jon' +
    ' Mengede in the mix Street Pieces released \'Monster\', a frenzied psychedelic blues jam featured in Blunt Magazine and followed up' +
    ' with an unforgettable show as they officially released \'Everything You Ever Wanted\' at The Foundry.\n' + '\n' + 'Listen below...';
  location = 'Brisbane';
  genre = 'Rock';

  constructor() {
  }

  ngOnInit() {
  }

}
