import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HouseholdService} from '../../common/household.service';
import {AccountModel} from '../../models/account.model';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {MakeRecurringComponent} from '../make-recurring/make-recurring.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild('removeAccountModal') removeAccountModal: NgbModalRef;
  account: AccountModel;

  showMainSpinner = true;
  newTabIcon = faExternalLinkAlt;

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

  makeRecurring() {
    const recurringModal = this.modalService.open(MakeRecurringComponent, {size: 'lg'});
    recurringModal.componentInstance.account = this.account;
    recurringModal.result.then((res) => {
      if (!!res) {
        console.log(res);
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
