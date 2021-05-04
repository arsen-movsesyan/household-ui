import {Component, OnInit} from '@angular/core';
import {HouseholdService} from '../common/household.service';
import {VehicleModel} from '../models/vehicle.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddEditVehicleComponent} from './addedit-vehicle/addedit-vehicle.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: VehicleModel[];

  showMainSpinner = true;

  constructor(
    private householdService: HouseholdService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  openAddVehicleModal() {
    this.modalService.open(AddEditVehicleComponent).result.then((newVehicle: VehicleModel) => {
      if (!!newVehicle) {
        this.householdService.addVehicle(newVehicle)
          .subscribe((addedVehicle: VehicleModel) => {
            this.vehicles.push(addedVehicle);
          });
      }
    });
  }

  private getAllVehicles() {
    this.householdService.getAllVehicles()
      .subscribe((vehicles: VehicleModel[]) => {
        this.vehicles = vehicles;
        this.showMainSpinner = false;
      });
  }
}
