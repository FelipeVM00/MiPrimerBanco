import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardComponent } from './account-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AccountCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AccountCardComponent]
})
export class AccountCardModule { }
