import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HouseholdService} from '../../common/household.service';
import {NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';
import {VehicleModel} from '../../models/vehicle.model';
import {AddEditVehicleComponent} from '../addedit-vehicle/addedit-vehicle.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  @ViewChild('removeVehicleModal') removeVehicleModal: NgbModalRef;
  removeVehicleActiveModal: NgbActiveModal;
  vehicle: VehicleModel;

  showMainSpinner = true;

  constructor(
    private route: ActivatedRoute,
    private householdService: HouseholdService,
    private modalService: NgbModal,
    private location: Location
  ) { }

  ngOnInit(): void {
    const vehicleId = this.route.snapshot.paramMap.get('id');
    this.householdService.getVehicle(vehicleId)
      .subscribe((vehicle: VehicleModel) => {
        this.vehicle = vehicle;
        this.showMainSpinner = false;
      });
  }

  openEditModal() {
    const modalRef = this.modalService.open(AddEditVehicleComponent);
    modalRef.componentInstance.vehicle = this.vehicle;
    modalRef.result.then((updatedVehicle: VehicleModel) => {
      if (!!updatedVehicle) {
        this.householdService.editVehicle(this.vehicle.id, updatedVehicle)
          .subscribe((savedVehicle: VehicleModel) => {
            this.vehicle = savedVehicle;
          });
      }
    });
  }

  openRemoveModal() {
    this.removeVehicleActiveModal = this.modalService.open(this.removeVehicleModal);
  }

  closeRemoveVehicleModal() {
    this.removeVehicleActiveModal.close();
  }

  removeVehicle() {
    this.householdService.removeVehicle(this.vehicle.id)
      .subscribe(() => {
        this.closeRemoveVehicleModal();
        this.goBack();
      });
  }

  goBack() {
    this.location.back();
  }
}
