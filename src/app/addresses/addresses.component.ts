import {Component, OnInit, ViewChild} from '@angular/core';
import {AddressModel} from '../models/address.model';
import {HouseholdService} from '../common/household.service';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';
import {StateModel} from '../models/state.model';
// import {faCalendar} from '@fortawesome/free-regular-svg-icons/faCalendar';
import {faPen, faCalendar, faTrash} from '@fortawesome/free-solid-svg-icons';
import {CreateAddressModel} from '../models/create-address.model';
import {formatAddress, formatDateToNgbDateStr, getStructFromString} from '../common/utils';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  @ViewChild('addressAddEditModal', {static: false}) addressAddEditModal: NgbModalRef;
  @ViewChild('addressDeleteModal', {static: false}) addressDeleteModal: NgbModalRef;

  addressActiveModal: NgbActiveModal;

  addresses: AddressModel[];
  addEditAddressForm: UntypedFormGroup;
  allStates: StateModel[];
  deletedAddress: AddressModel;
  editedAddress: AddressModel;
  addressEditMode: boolean;

  showMainSpinner = true;
  calendarIcon = faCalendar;
  trashIcon = faTrash;
  editIcon = faPen;

  constructor(
    private householdService: HouseholdService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllAddresses();
    // this.initAddAddressForm();
    this.householdService.getAllStates()
      .subscribe((allStates: any) => {
        this.allStates = allStates;
      });
  }

  openAddAddressModal() {
    this.addressEditMode = false;
    this.initAddAddressForm();
    this.addressActiveModal = this.modalService.open(this.addressAddEditModal);
  }

  closeAddressModal() {
    this.addressActiveModal.close();
  }

  addAddress() {
    const newAddress = this.formatAddressFormValue();
    this.householdService.addAddress(newAddress as CreateAddressModel)
      .subscribe((createdAddress: AddressModel) => {
        formatAddress(createdAddress);
        this.addresses.push(createdAddress);
        this.closeAddressModal();
      }, error => {
        console.log(error);
        this.closeAddressModal();
      });
  }

  openEditAddressModal(id: number) {
    this.addressEditMode = true;
    this.editedAddress = this.addresses.find(a => a.id === id);
    this.initAddAddressForm();
    this.addressActiveModal = this.modalService.open(this.addressAddEditModal);
  }

  closeEditAddressModal() {
    this.closeAddressModal();
    this.editedAddress = null;
  }

  editAddress() {
    const editedAddress = this.formatAddressFormValue();
    this.householdService.editAddress(this.editedAddress.id, editedAddress as AddressModel)
      .subscribe((updatedAddress: AddressModel) => {
        const index = this.addresses.findIndex(a => a.id === this.editedAddress.id);
        if (index > -1) {
          formatAddress(updatedAddress);
          this.addresses[index] = updatedAddress;
          this.closeEditAddressModal();
        }
      });
  }

  openDeleteAddressModal(id: number) {
    this.deletedAddress = this.addresses.find(a => a.id === id);
    this.addressActiveModal = this.modalService.open(this.addressDeleteModal);
  }

  closeDeleteAddressModal() {
    this.addressActiveModal.close();
    this.deletedAddress = null;
  }

  deleteAddress() {
    this.householdService.removeAddress(this.deletedAddress.id)
      .subscribe(() => {
        const index = this.addresses.findIndex(a => a.id === this.deletedAddress.id);
        if (index > -1) {
          this.addresses.splice(index, 1);
        }
        this.closeDeleteAddressModal();
      });
  }

  private getAllAddresses() {
    this.householdService.getAllAddresses()
      .subscribe((addresses: AddressModel[]) => {
        this.addresses = addresses;
        this.addresses.forEach(
          (a: AddressModel) => formatAddress(a));
        this.showMainSpinner = false;
      });
  }

  private initAddAddressForm() {
    if (this.addressEditMode) {
      const periodStart = getStructFromString(this.editedAddress.period_start);
      const periodEnd = !!this.editedAddress.period_end ? getStructFromString(this.editedAddress.period_end) : null;
      this.addEditAddressForm = new UntypedFormGroup({
        period_start: new UntypedFormControl(periodStart, [Validators.required]),
        period_end: new UntypedFormControl(periodEnd),
        comment: new UntypedFormControl(this.editedAddress.comment)
      });
    }
    else {
      this.addEditAddressForm = new UntypedFormGroup({
        period_start: new UntypedFormControl(null, [Validators.required]),
        period_end: new UntypedFormControl(null),
        address_line1: new UntypedFormControl(null, [Validators.required]),
        address_line2: new UntypedFormControl(null),
        apt_suite: new UntypedFormControl(null),
        city: new UntypedFormControl(null, [Validators.required]),
        state: new UntypedFormControl(null, [Validators.required]),
        zip_code: new UntypedFormControl(null, [Validators.required]),
        comment: new UntypedFormControl(null)
      });
    }
  }

  private formatAddressFormValue() {
    const newAddress = this.addEditAddressForm.value;
    newAddress.period_start = formatDateToNgbDateStr(newAddress.period_start);
    newAddress.period_end = !!newAddress.period_end ? formatDateToNgbDateStr(newAddress.period_end) : null;
    // This is needed to set as null. If touched, input field creates blank string instead of null
    newAddress.apt_suite = !!newAddress.apt_suite ? newAddress.apt_suite : null;
    return newAddress;
  }
}
