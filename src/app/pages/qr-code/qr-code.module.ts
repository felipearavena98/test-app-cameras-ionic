import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { QrCodePageRoutingModule } from './qr-code-routing.module';

import { QrCodePage } from './qr-code.page';




@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        QrCodePageRoutingModule
    ],
    declarations: [QrCodePage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QrCodePageModule { }
