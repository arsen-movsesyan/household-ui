import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {peopleUrl} from './urls';
import {PersonModel} from '../models/person.model';

@Injectable({providedIn: 'root'})
export class HouseholdService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPeople() {
    console.log(peopleUrl);
    return this.httpClient.get<PersonModel[]>(peopleUrl);
  }
}
