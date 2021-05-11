import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountModel} from '../../models/account.model';
import {RecurringModel} from '../../models/recurring.model';
import {HouseholdService} from '../../common/household.service';
import {ConstantsModel} from '../../common/constants';

@Component({
  selector: 'app-make-recurring',
  templateUrl: './make-recurring.component.html',
  styleUrls: ['./make-recurring.component.css']
})
export class MakeRecurringComponent implements OnInit {
  @Input() account: AccountModel;
  recurring: RecurringModel;
  constants: ConstantsModel;

  editMode: boolean;
  recurringForm: FormGroup;
  showMainSpinner = true;

  constructor(
    private activeModal: NgbActiveModal,
    private householdService: HouseholdService
  ) { }

  ngOnInit(): void {
    this.editMode = !!this.recurring;
    this.householdService.getConstants()
      .subscribe((constants: ConstantsModel) => {
        this.constants = constants;
        this.showMainSpinner = false;
      });
    this.recurringForm = new FormGroup({
      account_id: new FormControl(this.account.id),
      frequency: new FormControl(this.editMode ? this.recurring.frequency : null, [Validators.required]),
      extra_params: new FormArray([]),
      acknowledge_required: new FormControl(this.editMode ? this.recurring.acknowledge_required : null),
      comment: new FormControl(this.editMode ? this.recurring.comment : null)
    });
  }

  closeModal() {
    this.activeModal.close(null);
  }
}
