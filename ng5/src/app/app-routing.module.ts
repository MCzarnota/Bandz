import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ExtraComponent} from './extra/extra.component';

const routes: Routes = [
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'extra',
    component: ExtraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
