import {Component, Input, OnInit} from '@angular/core';
import {VehicleModel} from '../../models/vehicle.model';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {faCalendar} from '@fortawesome/free-regular-svg-icons/faCalendar';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {formatDateToNgbDateStr, getStructFromString} from '../../common/utils';

@Component({
  selector: 'app-addedit-vehicle',
  templateUrl: './addedit-vehicle.component.html',
  styleUrls: ['./addedit-vehicle.component.css']
})
export class AddEditVehicleComponent implements OnInit {
  @Input() vehicle: VehicleModel;
  addEditVehicleForm: UntypedFormGroup;

  calendarIcon = faCalendar;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initVehicleForm();
  }

  get editMode() {
    return !!this.vehicle;
  }

  submit() {
    const value = this.addEditVehicleForm.value;
    if (!!value.purchase_year) {
      value.purchase_year = formatDateToNgbDateStr(value.purchase_year);
    }
    this.activeModal.close(value as VehicleModel);
  }

  closeModal() {
    this.activeModal.close(null);
  }

  private initVehicleForm() {
    this.addEditVehicleForm = new UntypedFormGroup({
      make: new UntypedFormControl(this.editMode ? this.vehicle.make : null, [Validators.required]),
      vehicle_model: new UntypedFormControl(this.editMode ? this.vehicle.vehicle_model : null, [Validators.required]),
      year: new UntypedFormControl(this.editMode ? this.vehicle.year : null, [Validators.required]),
      license_plate: new UntypedFormControl(this.editMode ? this.vehicle.license_plate : null, [Validators.required]),
      vin: new UntypedFormControl(this.editMode ? this.vehicle.vin : null, [Validators.required]),
      purchase_year: new UntypedFormControl(this.editMode ? this.vehicle.purchase_year : null),
      comment: new UntypedFormControl(null)
    });
    if (this.editMode) {
      const purchaseDate = getStructFromString(this.vehicle.purchase_year);
      this.addEditVehicleForm.setControl('purchase_year', new UntypedFormControl(purchaseDate));
    }
  }
}
