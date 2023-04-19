import { Component } from '@angular/core';

@Component({
    selector: 'app-qr2-code',
    templateUrl: './qr2-code.page.html',
    styleUrls: ['./qr2-code.page.scss'],
})
export class Qr2CodePage {

    // Crea una variable para almacenar el resultado del escaneo
    scanResult: string | undefined;

    constructor() { }

    onScanSuccess(result: string) {
        console.log('Escaneo exitoso:', result);
        // Asigna el resultado a la variable scanResult
        this.scanResult = result;
    }
}
