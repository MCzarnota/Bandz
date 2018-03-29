import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExtraComponent} from './extra/extra.component';
import {SlideShowWithSearchBarComponent} from './slide-show-with-search-bar/slide-show-with-search-bar.component';
import {ProfileComponent} from './profile/profile.component';
import {GigsComponent} from './gigs/gigs.component';

const routes: Routes = [
  {
    path: 'extra',
    component: ExtraComponent
  },
  {
    path: '',
    component: SlideShowWithSearchBarComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'gigs',
    component: GigsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
