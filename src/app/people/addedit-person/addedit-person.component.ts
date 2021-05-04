import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PersonModel} from '../../models/person.model';
import {faCalendar} from '@fortawesome/free-regular-svg-icons/faCalendar';
// import { DateTime } from 'luxon';
import {parseISO, getDate, getMonth, getYear} from 'date-fns';
import {cleanPhoneSsnMaskedValue} from '../../common/utils';


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

  submit() {
    const value = this.addPersonForm.value as PersonModel;
    value.phone = cleanPhoneSsnMaskedValue(value.phone);
    value.ssn = cleanPhoneSsnMaskedValue(value.ssn);
    this.activeModal.close(value);
  }

  closeModal() {
    this.activeModal.close(null);
  }

  private initPersonForm() {
    this.addPersonForm = new FormGroup({
      first_name: new FormControl(!!this.person ? this.person.first_name : null, [Validators.required]),
      last_name: new FormControl(!!this.person ? this.person.last_name : null, [Validators.required]),
      email: new FormControl(!!this.person ? this.person.email : null, [Validators.required, Validators.email]),
      phone: new FormControl(!!this.person ? this.person.phone : null, [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
      ssn: new FormControl(!!this.person ? this.person.ssn : null, [Validators.required])
    });
    if (!!this.person) {
      const dob = parseISO(this.person.dob);
      this.addPersonForm.setControl('dob', new FormControl({day: getDate(dob), month: getMonth(dob), year: getYear(dob)}));
    }
  }
}
