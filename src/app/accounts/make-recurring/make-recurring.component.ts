import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {AccountModel} from '../../models/account.model';
import {RecurringModel} from '../../models/recurring.model';
import {HouseholdService} from '../../common/household.service';
import {ConstantsModel} from '../../common/constants';
import {faCalendar} from '@fortawesome/free-regular-svg-icons/faCalendar';

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
  recurringForm: UntypedFormGroup;
  showMainSpinner = true;
  calendarIcon = faCalendar;

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
    this.recurringForm = new UntypedFormGroup({
      account_id: new UntypedFormControl(this.account.id),
      frequency: new UntypedFormControl(this.editMode ? this.recurring.frequency : null, [Validators.required]),
      extra_params: new UntypedFormArray([]),
      acknowledge_required: new UntypedFormControl(this.editMode ? this.recurring.acknowledge_required : null),
      comment: new UntypedFormControl(this.editMode ? this.recurring.comment : null)
    });
  }

  closeModal() {
    this.activeModal.close(null);
  }
}
