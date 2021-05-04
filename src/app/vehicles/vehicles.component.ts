import {Component, OnInit, ViewChild} from '@angular/core';
import {HouseholdService} from '../common/household.service';
import {VehicleModel} from '../models/vehicle.model';
import {NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  @ViewChild('addVehicleModal', {static: false}) addVehicleModal: NgbModalRef;
  addVehicleActiveModal: NgbActiveModal;
  vehicles: VehicleModel[];
  addVehicleForm: FormGroup;

  showMainSpinner = true;

  constructor(
    private householdService: HouseholdService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllVehicles();
    this.initAddVehicleForm();
  }

  openAddVehicleModal() {
    this.addVehicleActiveModal = this.modalService.open(this.addVehicleModal);
  }

  closeVehicleModal() {
    this.addVehicleActiveModal.close();
  }

  addVehicle() {
    const newVehicle = this.addVehicleForm.value as VehicleModel;
    this.householdService.addVehicle(newVehicle)
      .subscribe((addedVehicle: VehicleModel) => {
        this.vehicles.push(addedVehicle);
        this.initAddVehicleForm();
        this.closeVehicleModal();
      });
  }

  private getAllVehicles() {
    this.householdService.getAllVehicles()
      .subscribe((vehicles: VehicleModel[]) => {
        this.vehicles = vehicles;
        this.showMainSpinner = false;
      });
  }

  private initAddVehicleForm() {
    this.addVehicleForm = new FormGroup({
      make: new FormControl(null, [Validators.required]),
      vehicle_model: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
      license_plate: new FormControl(null, [Validators.required]),
      vin: new FormControl(null, [Validators.required]),
      purchase_year: new FormControl(null),
      comment: new FormControl(null),
    });
  }
}
