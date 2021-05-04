import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {PersonComponent} from './people/person/person.component';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {AddressesComponent} from './addresses/addresses.component';


const routes: Routes = [
  {path: 'people', component: PeopleComponent},
  {path: 'person/:id', component: PersonComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'addresses', component: AddressesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
