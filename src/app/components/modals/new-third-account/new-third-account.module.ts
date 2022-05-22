import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThirdAccountComponent } from './new-third-account.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewThirdAccountComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class NewThirdAccountModule { }
