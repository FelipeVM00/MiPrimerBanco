import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferThirdAccountsComponent } from './transfer-third-accounts.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TransferThirdAccountsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TransferThirdAccountsComponent]
})
export class TransferThirdAccountsModule { }
