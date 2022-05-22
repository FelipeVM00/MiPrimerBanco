import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ConfirmTransferComponent } from '../confirm-transfer/confirm-transfer.component';

@Component({
  selector: 'app-transfer-third-accounts',
  templateUrl: './transfer-third-accounts.component.html',
  styleUrls: ['./transfer-third-accounts.component.scss'],
})
export class TransferThirdAccountsComponent implements OnInit {

  public accounts: any[];

  constructor(private storage: Storage, private modalController: ModalController) { }

  async ngOnInit() {
    this.accounts = await this.storage.get('accounts');
  }

  public dismissModal() {
    this.modalController.dismiss();
  }

  public async selectAccount(account) {
    console.log(account);
    const modal = await this.modalController.create({
      component: ConfirmTransferComponent,
      id: 'confirm-transfer',
      componentProps: {
        transferInfo: account
      }
    });
    await modal.present();
  }

}
