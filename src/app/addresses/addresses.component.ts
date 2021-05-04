import {Component, OnInit, ViewChild} from '@angular/core';
import {AddressModel} from '../models/address.model';
import {HouseholdService} from '../common/household.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {StateModel} from '../models/state.model';
import {faCalendar} from '@fortawesome/free-regular-svg-icons/faCalendar';
import {CreateAddressModel} from '../models/create-address.model';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  @ViewChild('addAddressModal', {static: false}) addAddressModal: NgbModalRef;
  addAddressActiveModal: NgbActiveModal;
  addresses: AddressModel[];
  addAddressForm: FormGroup;
  allStates: StateModel[];

  showMainSpinner = true;
  calendarIcon = faCalendar;

  constructor(
    private householdService: HouseholdService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllAddresses();
    this.initAddAddressForm();
    this.householdService.getAllStates()
      .subscribe((allStates: any) => {
        this.allStates = allStates;
      });
  }

  openAddAddressModal() {
    this.addAddressActiveModal = this.modalService.open(this.addAddressModal);
  }

  closeAddressModal() {
    this.addAddressActiveModal.close();
    this.initAddAddressForm();
  }

  addAddress() {
    const newAddress = this.addAddressForm.value as CreateAddressModel;
    this.householdService.addAddress(newAddress)
      .subscribe((createdAddress: AddressModel) => {
        this.addresses.push(createdAddress);
        this.closeAddressModal();
      });
  }

  private getAllAddresses() {
    this.householdService.getAllAddresses()
      .subscribe((addresses: AddressModel[]) => {
        this.addresses = addresses;
        this.showMainSpinner = false;
      });
  }

  private initAddAddressForm() {
    this.addAddressForm = new FormGroup({
      period_start: new FormControl(null, [Validators.required]),
      period_end: new FormControl(null),
      address_line1: new FormControl(null, [Validators.required]),
      address_line2: new FormControl(null),
      apt_suite: new FormControl(null),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zip_code: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      comment: new FormControl(null)
    });
  }
}
