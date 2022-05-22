import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsPageRoutingModule } from './transactions-routing.module';

import { TransactionsPage } from './transactions.page';
import { NewThirdAccountModule } from 'src/app/components/modals/new-third-account/new-third-account.module';
import { TransferThirdAccountsModule } from 'src/app/components/modals/transfer-third-accounts/transfer-third-accounts.module';
import { ConfirmTransferModule } from 'src/app/components/modals/confirm-transfer/confirm-transfer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsPageRoutingModule,
    NewThirdAccountModule,
    TransferThirdAccountsModule,
    ConfirmTransferModule
  ],
  declarations: [TransactionsPage]
})
export class TransactionsPageModule { }
