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
import { SsnComponent } from './people/ssn/ssn.component';
import { DisplaySsnComponent } from './common/display-ssn/display-ssn.component';
import { PersonComponent } from './people/person/person.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddressesComponent } from './addresses/addresses.component';
import { AddEditPersonComponent } from './people/addedit-person/addedit-person.component';
import {TextMaskModule} from 'angular2-text-mask';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { AddEditVehicleComponent } from './vehicles/addedit-vehicle/addedit-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    PeopleComponent,
    SpinnerComponent,
    EmailDisplayComponent,
    PhonePipe,
    SsnComponent,
    DisplaySsnComponent,
    PersonComponent,
    VehiclesComponent,
    AddressesComponent,
    AddEditPersonComponent,
    VehicleComponent,
    AddEditVehicleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
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
