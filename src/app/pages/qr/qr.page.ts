import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";
import { ModalController } from '@ionic/angular';
import { ConfirmTransferComponent } from 'src/app/components/modals/confirm-transfer/confirm-transfer.component';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public encodedData: string = 'Transferencia';
  public scannedBarCode: {};
  public barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private scanner: BarcodeScanner, private modalController: ModalController) {

    this.encodedData;

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true,
    };

  }

  ngOnInit() {

  }

  scanBRcode() {
    this.scanner.scan().then(async res => {
      this.scannedBarCode = res;
      if (!res.cancelled) {
        const modal = await this.modalController.create({
          component: ConfirmTransferComponent,
          id: 'confirm-transfer',
          componentProps: {
            transferInfo: {
              name: 'Nexos',
              bank: 'Nequi',
              accountType: 'Ahorros',
              accountNumber: '123141212312',
              accountOwner: '1293993288',
              currency: 'COP'
            }
          }
        });
        await modal.present();
      }
    }
    ).catch(err => {
      alert(err);
    });
  }

  generateBarCode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodedData).then(
      res => {
        alert(res);
        this.encodedData = res;
      }, error => {
        alert(error);
      }
    );
  }



}
