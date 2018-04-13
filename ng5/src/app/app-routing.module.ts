import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {ExtraComponent} from './extra/extra.component';
import {BandProfileComponent} from './bandProfile/profile.component';
import {FrontViewComponent} from './front-view/front-view.component';
import {MainViewComponent} from './main-view/main-view.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './../guards/auth.guard';
/** Routes */
const routes: Routes = [
  {path: 'extra', component: ExtraComponent},
  {path: 'main', component: MainViewComponent},
  {path: '', component: FrontViewComponent},
  {path: 'bandprofile', component: BandProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
