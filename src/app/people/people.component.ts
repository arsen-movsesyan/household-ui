import { Component, OnInit } from '@angular/core';
import {HouseholdService} from '../common/household.service';
import {PersonModel} from '../models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: PersonModel[];

  showMainSpinner = true;

  constructor(private householdService: HouseholdService) { }

  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople() {
    console.log('Inside');
    this.householdService.getAllPeople()
      .subscribe((allPeople: PersonModel[]) => {
        this.people = allPeople;
        this.showMainSpinner = false;
      }, error => {
        console.log(error);
        this.showMainSpinner = false;
      });
  }
}
