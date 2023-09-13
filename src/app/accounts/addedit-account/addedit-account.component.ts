import { Component, OnInit } from '@angular/core';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {AccountModel} from '../../models/account.model';
import {ActivatedRoute} from '@angular/router';
import {HouseholdService} from '../../common/household.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {urlRegEx} from '../../common/constants';
import {AccountExtraModel} from '../../models/account-extra.model';

@Component({
  selector: 'app-addedit-account',
  templateUrl: './addedit-account.component.html',
  styleUrls: ['./addedit-account.component.css']
})
export class AddEditAccountComponent implements OnInit {
  account: AccountModel;
  accountForm: UntypedFormGroup;
  extraFieldFormArray: UntypedFormArray;

  trashIcon = faTrash;

  constructor(
    private route: ActivatedRoute,
    private householdService: HouseholdService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const accountId = this.route.snapshot.paramMap.get('id');
    this.initAccountForm();
    if (!!accountId) {
      this.householdService.getAccount(accountId)
        .subscribe((account: AccountModel) => {
          this.account = account;
          this.initAccountForm(this.account);
        });
    }
  }

  get editMode() {
    return !!this.account;
  }

  getFormGroups() {
    return this.extraFieldFormArray.controls as UntypedFormGroup[];
  }

  addExtraFieldFormGroup(extra?: AccountExtraModel) {
    this.extraFieldFormArray.push(new UntypedFormGroup({
      parameter: new UntypedFormControl(extra ? extra.parameter : null, [Validators.required]),
      value: new UntypedFormControl(extra ? extra.value : null, [Validators.required]),
      comment: new UntypedFormControl(extra ? extra.comment : null)
    }));
  }

  removeExtraFieldFormGroup(index: number) {
    this.extraFieldFormArray.removeAt(index);
  }

  submit() {
    if (this.editMode) {
      this.householdService.editAccount(this.account.id, this.accountForm.value as AccountModel)
        .subscribe(() => {
          this.goBack();
        });
    } else {
      this.householdService.addAccount(this.accountForm.value as AccountModel)
        .subscribe(() => {
          this.goBack();
        });
    }
  }

  goBack() {
    this.location.back();
  }

  private initAccountForm(account?: AccountModel) {
    this.accountForm = new UntypedFormGroup({
      account_name: new UntypedFormControl(account ? account.account_name : null, [Validators.required]),
      account_url: new UntypedFormControl(account ? account.account_url : null, [Validators.required, Validators.pattern(urlRegEx)]),
      description: new UntypedFormControl(account ? account.description : null, [Validators.required]),
      username_value: new UntypedFormControl(account ? account.username_value : null, [Validators.required]),
      password_value: new UntypedFormControl(account ? account.password_value : null, [Validators.required]),
      extra_fields: new UntypedFormArray([])
    });
    this.extraFieldFormArray = this.accountForm.get('extra_fields') as UntypedFormArray;
    if (!!account) {
      if (!!account.extra_fields) {
        account.extra_fields.forEach(f => {
          this.addExtraFieldFormGroup(f);
        });
      }
    }
  }
}
