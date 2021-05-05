import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HouseholdService} from '../../common/household.service';
import {AccountModel} from '../../models/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild('removeAccountModal') removeAccountModal: NgbModalRef;
  account: AccountModel;

  showMainSpinner = true;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private householdService: HouseholdService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    const accountId = this.route.snapshot.paramMap.get('id');
    this.householdService.getAccount(accountId)
      .subscribe((account: AccountModel) => {
        this.account = account;
        this.showMainSpinner = false;
      });
  }

  removeAccount() {
    this.modalService.open(this.removeAccountModal).result.then((res: boolean) => {
      if (res) {
        this.householdService.removeAccount(this.account.id)
          .subscribe(() => {
            this.goBack();
          });
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
