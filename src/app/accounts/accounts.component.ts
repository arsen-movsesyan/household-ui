import { Component, OnInit } from '@angular/core';
import {HouseholdService} from '../common/household.service';
import {AccountModel} from '../models/account.model';
import {TABLE_ITEMS_PER_PAGE} from '../common/constants';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  showMainSpinner = true;
  allAccounts: AccountModel[];
  displayAccounts: AccountModel[];
  searchString: string;
  pageSize: number;

  page = 1;
  tableItemsPerPage = TABLE_ITEMS_PER_PAGE;

  constructor(private householdService: HouseholdService) { }

  ngOnInit(): void {
    this.pageSize = 50;
    this.householdService.getAllAccounts()
      .subscribe((accounts: AccountModel[]) => {
        this.allAccounts = accounts;
        this.displayAccounts = [...this.allAccounts];
        this.showMainSpinner = false;
      });
  }

  filter() {
    if (!!this.searchString) {
      this.displayAccounts = this.allAccounts.filter(a => {
        const term = this.searchString.toLowerCase();
        if (a.account_name.startsWith(term)) {
          return true;
        } else if (!!a.description && a.description.toLowerCase().includes(term)) {
          return true;
        }
      });
    } else {
      this.displayAccounts = [...this.allAccounts];
    }
  }
}
