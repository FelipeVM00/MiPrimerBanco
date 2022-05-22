import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewThirdAccountComponent } from 'src/app/components/modals/new-third-account/new-third-account.component';
import { TransferThirdAccountsComponent } from 'src/app/components/modals/transfer-third-accounts/transfer-third-accounts.component';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  public showNewAccountButton: boolean = false;

  constructor(private modalController: ModalController, private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(accounts => {
      this.showNewAccountButton = accounts.length > 0;
    });
  }

  async openNewThirdAccount() {
    const modal = await this.modalController.create({
      component: NewThirdAccountComponent
    });
    await modal.present();
  }

  async openTransfer() {
    const modal = await this.modalController.create({
      component: TransferThirdAccountsComponent,
      id: 'transfer-third-accounts'
    });
    await modal.present();
  }

}
