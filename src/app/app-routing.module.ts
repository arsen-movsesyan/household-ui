import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {PersonComponent} from './people/person/person.component';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {AddressesComponent} from './addresses/addresses.component';
import {VehicleComponent} from './vehicles/vehicle/vehicle.component';
import {AccountsComponent} from './accounts/accounts.component';
import {AddEditAccountComponent} from './accounts/addedit-account/addedit-account.component';
import {AccountComponent} from './accounts/account/account.component';


const routes: Routes = [
  {path: 'people', component: PeopleComponent},
  {path: 'person/:id', component: PersonComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'vehicle/:id', component: VehicleComponent},
  {path: 'addresses', component: AddressesComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'account/:id', component: AccountComponent},
  {path: 'add-account', component: AddEditAccountComponent},
  {path: 'edit-account/:id', component: AddEditAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
