import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PeopleComponent } from './people/people.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import {HttpClientModule} from '@angular/common/http';
import { EmailDisplayComponent } from './common/email-display/email-display.component';
import {PhonePipe} from './common/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    PeopleComponent,
    SpinnerComponent,
    EmailDisplayComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
