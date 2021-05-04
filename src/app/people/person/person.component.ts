import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PersonModel} from '../../models/person.model';
import {ActivatedRoute} from '@angular/router';
import {HouseholdService} from '../../common/household.service';
import {NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';
import {AddEditPersonComponent} from '../addedit-person/addedit-person.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @ViewChild('removePersonModal') removePersonModal: NgbModalRef;
  removePersonActiveModal: NgbActiveModal;

  person: PersonModel;
  showMainSpinner = true;

  constructor(
    private route: ActivatedRoute,
    private householdService: HouseholdService,
    private modalService: NgbModal,
    private location: Location
  ) { }

  ngOnInit(): void {
    const personId = this.route.snapshot.paramMap.get('id');
    this.householdService.getPerson(personId)
      .subscribe((person: PersonModel) => {
        this.person = person;
        this.showMainSpinner = false;
      });
  }

  openEditModal() {
    const modalRef = this.modalService.open(AddEditPersonComponent);
    modalRef.componentInstance.person = this.person;
    modalRef.result.then((updatedPerson: PersonModel) => {
      if (!!updatedPerson) {
        this.householdService.editPerson(this.person.id, updatedPerson)
          .subscribe((savedPerson: PersonModel) => {
            this.person = savedPerson;
          });
      }
    });
  }

  openRemoveModal() {
    this.removePersonActiveModal = this.modalService.open(this.removePersonModal);
  }

  closeRemovePersonModal() {
    this.removePersonActiveModal.close();
  }

  removePerson() {
    this.householdService.removePerson(this.person.id)
      .subscribe(() => {
        this.closeRemovePersonModal();
        this.goBack();
      });
  }

  goBack() {
    this.location.back();
  }
}
