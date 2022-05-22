import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmTransferComponent } from './confirm-transfer.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ConfirmTransferComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [ConfirmTransferComponent]
})
export class ConfirmTransferModule { }
