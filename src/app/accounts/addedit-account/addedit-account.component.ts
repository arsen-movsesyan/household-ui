import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {AccountModel} from '../../models/account.model';
import {ActivatedRoute} from '@angular/router';
import {HouseholdService} from '../../common/household.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {urlRegEx} from '../../common/constants';

@Component({
  selector: 'app-addedit-account',
  templateUrl: './addedit-account.component.html',
  styleUrls: ['./addedit-account.component.css']
})
export class AddEditAccountComponent implements OnInit {
  account: AccountModel;
  accountForm: FormGroup;
  extraFieldFormArray: FormArray;

  trashIcon = faTrash;

  constructor(
    private route: ActivatedRoute,
    private householdService: HouseholdService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const accountId = this.route.snapshot.paramMap.get('id');
    if (!!accountId) {
      this.householdService.getAccount(accountId)
        .subscribe((account: AccountModel) => {
          this.account = account;
        });
    }
    this.initAccountForm();
  }

  get editMode() {
    return !!this.account;
  }

  getFormGroups() {
    return this.extraFieldFormArray.controls as FormGroup[];
  }

  addExtraFieldFormGroup() {
    this.extraFieldFormArray.push(new FormGroup({
      parameter: new FormControl(null, [Validators.required]),
      value: new FormControl(null, [Validators.required]),
      comment: new FormControl(null)
    }));
  }

  removeExtraFieldFormGroup(index: number) {
    this.extraFieldFormArray.removeAt(index);
  }

  submit() {
    this.householdService.addAccount(this.accountForm.value as AccountModel)
      .subscribe(() => {
        this.goBack();
      });
  }

  goBack() {
    this.location.back();
  }

  private initAccountForm() {
    this.accountForm = new FormGroup({
      account_name: new FormControl(null, [Validators.required]),
      account_url: new FormControl(null, [Validators.required, Validators.pattern(urlRegEx)]),
      description: new FormControl(null, [Validators.required]),
      username_value: new FormControl(null, [Validators.required]),
      password_value: new FormControl(null, [Validators.required]),
      extra_fields: new FormArray([])
    });
    this.extraFieldFormArray = this.accountForm.get('extra_fields') as FormArray;
  }
}
