import {Component, OnInit} from '@angular/core';
import {HouseholdService} from '../common/household.service';
import {PersonModel} from '../models/person.model';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddEditPersonComponent} from './addedit-person/addedit-person.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  addPersonActiveModal: NgbActiveModal;
  people: PersonModel[];
  allPeople: PersonModel[];

  showMainSpinner = true;

  constructor(
    private householdService: HouseholdService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllPeople();
  }

  openAddPersonModal() {
    this.modalService.open(AddEditPersonComponent).result.then((newPerson: PersonModel) => {
      if (!!newPerson) {
        this.householdService.addPerson(newPerson)
          .subscribe((addedPerson: PersonModel) => {
            this.people.push(addedPerson);
          });
      }
    });
  }

  private getAllPeople() {
    this.householdService.getAllPeople()
      .subscribe((allPeople: PersonModel[]) => {
        this.allPeople = allPeople;
        this.people = allPeople.filter(p => !p.retired);
        this.showMainSpinner = false;
      }, error => {
        console.log(error);
        this.showMainSpinner = false;
      });
  }
}
