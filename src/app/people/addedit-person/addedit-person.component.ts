import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PersonModel} from '../../models/person.model';
import {faCalendar} from '@fortawesome/free-regular-svg-icons/faCalendar';
import {cleanPhoneSsnMaskedValue, formatDateToNgbDateStr, getStructFromString} from '../../common/utils';


@Component({
  selector: 'app-addedit-person',
  templateUrl: './addedit-person.component.html',
  styleUrls: ['./addedit-person.component.css']
})
export class AddEditPersonComponent implements OnInit {
  @Input() person: PersonModel;
  addPersonForm: FormGroup;
  calendarIcon = faCalendar;
  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  ssnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  phoneConfig: any;
  ssnConfig: any;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initPersonForm();
    this.phoneConfig = {
      mask: this.phoneMask,
      guide: false,
      keepCharPositions: true
    };
    this.ssnConfig = {
      mask: this.ssnMask,
      guide: false,
      keepCharPositions: true
    };
  }

  get editMode() {
    return !!this.person;
  }

  submit() {
    const value = this.addPersonForm.value;
    value.phone = cleanPhoneSsnMaskedValue(value.phone);
    value.ssn = cleanPhoneSsnMaskedValue(value.ssn);
    value.dob = formatDateToNgbDateStr(value.dob);
    this.activeModal.close(value as PersonModel);
  }

  closeModal() {
    this.activeModal.close(null);
  }

  private initPersonForm() {
    this.addPersonForm = new FormGroup({
      first_name: new FormControl(this.editMode ? this.person.first_name : null, [Validators.required]),
      last_name: new FormControl(this.editMode ? this.person.last_name : null, [Validators.required]),
      email: new FormControl(this.editMode ? this.person.email : null, [Validators.required, Validators.email]),
      phone: new FormControl(this.editMode ? this.person.phone : null, [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
      ssn: new FormControl(this.editMode ? this.person.ssn : null, [Validators.required])
    });
    if (this.editMode) {
      const dob = getStructFromString(this.person.dob);
      this.addPersonForm.setControl('dob', new FormControl(dob));
    }
  }
}
