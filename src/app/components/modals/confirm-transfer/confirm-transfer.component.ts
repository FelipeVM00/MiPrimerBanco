import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Account } from 'src/app/models/account';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-confirm-transfer',
  templateUrl: './confirm-transfer.component.html',
  styleUrls: ['./confirm-transfer.component.scss'],
})
export class ConfirmTransferComponent implements OnInit {

  @Input() transferInfo: any;
  public accounts: Account[];
  public openConfirm: boolean = false;
  public accountSelected: string;
  public amount: number;

  constructor(private modalController: ModalController, private accountsService: AccountsService, private router: Router) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(accounts => {
      this.accounts = accounts as Account[];
    });
  }

  public selectAccount(account) {
    console.log('account', account);
    this.accountSelected = account.number;
  }

  public confirmTransfer() {
    this.openConfirm = true;
  }

  public dismissModal() {
    this.modalController.dismiss();
  }

  public cancelFromAmount() {
    this.accountSelected = null;
  }

  public closeTransferModals() {
    this.openConfirm = false;
    this.modalController.dismiss(undefined, undefined, 'confirm-transfer');
    this.modalController.dismiss(undefined, undefined, 'transfer-third-accounts');
  }


}
