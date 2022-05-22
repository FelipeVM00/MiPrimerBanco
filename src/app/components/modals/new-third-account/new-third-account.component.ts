import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-new-third-account',
  templateUrl: './new-third-account.component.html',
  styleUrls: ['./new-third-account.component.scss'],
})
export class NewThirdAccountComponent implements OnInit {

  public newAccountForm: FormGroup;
  public isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private modalController: ModalController,
    private accountsService: AccountsService
  ) {
    this.newAccountForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      bank: ['', [Validators.required]],
      accountType: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      accountOwner: ['', [Validators.required]],
      currency: ['', [Validators.required]]
    });
  }

  ngOnInit() { }

  public async submitForm() {
    this.isSubmitted = true;
    if (this.newAccountForm.invalid) {
      return;
    }
    const res = await this.accountsService.createNewAccount(this.newAccountForm.value);
    console.log('cuenta creada', res);
    if (res) {
      this.showSuccessAlert('Cuenta inscrita');
      this.dismissModal();
    } else {
      this.showErrorAlert('La cuenta ya existe');
    }
  }

  get errorControl() {
    return this.newAccountForm.controls;
  }

  private showErrorAlert(message: string) {
    this.alertController.create({
      header: 'Error al crear la cuenta',
      message,
      buttons: ['OK']
    }).then(alert => alert.present());
  }

  private showSuccessAlert(message: string) {
    this.alertController.create({
      header: 'Cuenta inscrita exitosamente',
      message,
      buttons: ['OK']
    }).then(alert => alert.present());
  }

  public dismissModal() {
    this.modalController.dismiss();
  }

}
