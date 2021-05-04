import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {addressUrl, createAddressUrl, peopleUrl, statesAPI, vehicleUrl} from './urls';
import {PersonModel} from '../models/person.model';
import {VehicleModel} from '../models/vehicle.model';
import {AddressModel} from '../models/address.model';
import {CreateAddressModel} from '../models/create-address.model';

@Injectable({providedIn: 'root'})
export class HouseholdService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPeople() {
    return this.httpClient.get<PersonModel[]>(peopleUrl);
  }

  getPerson(id: string) {
    return this.httpClient.get<PersonModel>(peopleUrl + id + '/');
  }

  addPerson(newPerson: PersonModel) {
    return this.httpClient.post<PersonModel>(peopleUrl, newPerson);
  }

  editPerson(updatedPerson: PersonModel) {
    const url = peopleUrl + updatedPerson.id.toString() + '/';
    return this.httpClient.put<PersonModel>(url, updatedPerson);
  }

  removePerson(id: number) {
    return this.httpClient.delete(peopleUrl + id + '/');
  }

  getAllVehicles() {
    return this.httpClient.get<VehicleModel[]>(vehicleUrl);
  }

  getVehicle(id: string) {
    return this.httpClient.get<VehicleModel[]>(vehicleUrl + id + '/');
  }

  addVehicle(newVehicle: VehicleModel) {
    return this.httpClient.post<VehicleModel>(vehicleUrl, newVehicle);
  }

  getAllAddresses() {
    return this.httpClient.get<AddressModel[]>(addressUrl);
  }

  addAddress(newAddress: CreateAddressModel) {
    return this.httpClient.post<AddressModel>(createAddressUrl, newAddress);
  }

  getAllStates() {
    return this.httpClient.get(statesAPI);
  }
}
