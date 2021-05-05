import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {accountUrl, addressUrl, createAddressUrl, peopleUrl, statesAPI, vehicleUrl} from './urls';
import {PersonModel} from '../models/person.model';
import {VehicleModel} from '../models/vehicle.model';
import {AddressModel} from '../models/address.model';
import {CreateAddressModel} from '../models/create-address.model';
import {AccountModel} from '../models/account.model';

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

  editPerson(id: number, updatedPerson: PersonModel) {
    const url = peopleUrl + id.toString() + '/';
    return this.httpClient.put<PersonModel>(url, updatedPerson);
  }

  removePerson(id: number) {
    return this.httpClient.delete(peopleUrl + id + '/');
  }

  getAllVehicles() {
    return this.httpClient.get<VehicleModel[]>(vehicleUrl);
  }

  getVehicle(id: string) {
    return this.httpClient.get<VehicleModel>(vehicleUrl + id + '/');
  }

  addVehicle(newVehicle: VehicleModel) {
    return this.httpClient.post<VehicleModel>(vehicleUrl, newVehicle);
  }

  editVehicle(id: number, editedVehicle: VehicleModel) {
    return this.httpClient.patch<VehicleModel>(vehicleUrl + id.toString() + '/', editedVehicle);
  }

  removeVehicle(id: number) {
    return this.httpClient.delete(vehicleUrl + id.toString() + '/');
  }

  getAllAddresses() {
    return this.httpClient.get<AddressModel[]>(addressUrl);
  }

  addAddress(newAddress: CreateAddressModel) {
    return this.httpClient.post<AddressModel>(createAddressUrl, newAddress);
  }

  editAddress(id: number, updatedAddress: AddressModel) {
    return this.httpClient.patch<AddressModel>(addressUrl + id.toString() + '/', updatedAddress);
  }

  removeAddress(id: number) {
    return this.httpClient.delete(addressUrl + id.toString() + '/');
  }

  getAllAccounts() {
    return this.httpClient.get<AccountModel[]>(accountUrl);
  }

  getAccount(id: string) {
    return this.httpClient.get(accountUrl + id + '/');
  }

  addAccount(newAccount: AccountModel) {
    return this.httpClient.post<AccountModel>(accountUrl, newAccount);
  }

  editAccount(id: number, editedAccount: AccountModel) {
    return this.httpClient.patch<AccountModel>(accountUrl + id.toString() + '/', editedAccount);
  }

  removeAccount(id: number) {
    return this.httpClient.delete(accountUrl + id.toString() + '/');
  }

  getAllStates() {
    return this.httpClient.get(statesAPI);
  }
}
