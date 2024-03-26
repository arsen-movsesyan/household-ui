import { Component, OnInit } from '@angular/core';
import {HouseholdService} from '../common/household.service';
import {AccountModel} from '../models/account.model';
import {TABLE_ITEMS_PER_PAGE} from '../common/constants';
import {faExternalLinkAlt, faSearch} from '@fortawesome/free-solid-svg-icons';

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

  newTabIcon = faExternalLinkAlt;
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

  get onePageItems() {
    return this.displayAccounts.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + +this.pageSize);
  }


  filter() {
    if (!!this.searchString) {
      this.displayAccounts = this.allAccounts.filter(a => {
        const term = this.searchString.toLowerCase();
        if (a.account_name.toLowerCase().includes(term)) {
          return true;
        }
        if (!!a.description && a.description.toLowerCase().includes(term)) {
          return true;
        }
      });
    } else {
      this.displayAccounts = [...this.allAccounts];
    }
  }

  protected readonly faSearch = faSearch;
}
