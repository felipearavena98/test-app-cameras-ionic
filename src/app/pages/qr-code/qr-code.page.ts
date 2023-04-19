import { Component, ElementRef, ViewChild } from '@angular/core';
import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage {

  public inProcess: boolean = false;

  @ViewChild('scannerContainer', { static: false }) scannerContainer: ElementRef | undefined;

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
    this.stopScan();
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
    this.stopScan();
  }

  async scan() {

    this.inProcess = true;

    if (this.scannerContainer && this.scannerContainer.nativeElement) {
      this.scannerContainer.nativeElement.classList.add('scanner-active');
    }

    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] }); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
      // this.stopScan()
      this.presentAlert();
    }

  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();

    if (this.scannerContainer && this.scannerContainer.nativeElement) {
      this.scannerContainer.nativeElement.classList.remove('scanner-active');
    }
  };

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: '¡Excelente!',
      // subHeader: 'La asistencia se registró correctamente',
      message: 'La asistencia se guardó correctamente',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            this.inProcess = false;

          },
        },
      ],
      mode: 'ios',
      translucent: true,
      animated: true
    });


    await alert.present();
  }
}