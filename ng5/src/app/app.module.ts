import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
<<<<<<< HEAD

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

=======
>>>>>>> dacd6373da09d11dede0b8937688577272242a47
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
/** Material IO imports */
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
/** !Material IO imports */
/** NG components */
import {AccordionModule} from 'primeng/components/accordion/accordion';
import {MenuItem} from 'primeng/components/common/api';

/** !NG components */
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {DataService} from './data.service';
import { ExtraComponent } from './extra/extra.component';
import { BandSliderComponent } from './band-slider/band-slider.component';
import { VenueSliderComponent } from './venue-slider/venue-slider.component';
import { SlideShowWithSearchBarComponent } from './slide-show-with-search-bar/slide-show-with-search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
<<<<<<< HEAD
import { SuggestionsComponent} from './suggestions/suggestions.component';
=======
import { SubmissionFormNextStepComponent } from './submission-form-next-step/submission-form-next-step.component';

>>>>>>> dacd6373da09d11dede0b8937688577272242a47


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExtraComponent,
    BandSliderComponent,
    VenueSliderComponent,
    SlideShowWithSearchBarComponent,
    FooterComponent,
    HeaderComponent,
    SuggestionsComponent,
    SubmitFormComponent,
    LoginFormComponent,
<<<<<<< HEAD
    SuggestionsComponent
=======
    SubmissionFormNextStepComponent
>>>>>>> dacd6373da09d11dede0b8937688577272242a47
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
<<<<<<< HEAD
  ],
  exports: [
    MatButtonModule,
    MatCardModule
=======
    MatIconModule,
    ReactiveFormsModule,
    AccordionModule

>>>>>>> dacd6373da09d11dede0b8937688577272242a47
  ],
  entryComponents: [
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})



export class AppModule {

}
export class MaterialModule {}