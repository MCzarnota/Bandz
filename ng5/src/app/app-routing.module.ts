import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ExtraComponent} from './extra/extra.component';
import {SlideShowWithSearchBarComponent} from "./slide-show-with-search-bar/slide-show-with-search-bar.component";
import {ProfileComponent} from "./profile/profile.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
