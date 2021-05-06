import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PeopleComponent } from './people/people.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { HttpClientModule} from '@angular/common/http';
import { EmailDisplayComponent } from './common/email-display/email-display.component';
import { PhonePipe} from './common/phone.pipe';
import { PersonComponent } from './people/person/person.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddressesComponent } from './addresses/addresses.component';
import { AddEditPersonComponent } from './people/addedit-person/addedit-person.component';
import {TextMaskModule} from 'angular2-text-mask';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { AddEditVehicleComponent } from './vehicles/addedit-vehicle/addedit-vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddEditAccountComponent } from './accounts/addedit-account/addedit-account.component';
import { AccountComponent } from './accounts/account/account.component';
import { TimedDisplayComponent } from './common/timed-display/timed-display.component';
import { SsnPipe} from './common/ssn-pipe';
import { BriefComponent } from './common/brief/brief.component';
import { CopyToClipboardComponent } from './common/copy-to-clipboard/copy-to-clipboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    PeopleComponent,
    SpinnerComponent,
    EmailDisplayComponent,
    PhonePipe,
    SsnPipe,
    PersonComponent,
    VehiclesComponent,
    AddressesComponent,
    AddEditPersonComponent,
    VehicleComponent,
    AddEditVehicleComponent,
    AccountsComponent,
    AddEditAccountComponent,
    AccountComponent,
    TimedDisplayComponent,
    BriefComponent,
    CopyToClipboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddEditPersonComponent, AddEditVehicleComponent],
})
export class AppModule { }
