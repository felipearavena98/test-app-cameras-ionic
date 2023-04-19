import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Qr2CodePageRoutingModule } from './qr2-code-routing.module';
import { Qr2CodePage } from './qr2-code.page';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        Qr2CodePageRoutingModule,
        ZXingScannerModule,
    ],
    declarations: [Qr2CodePage]
})
export class Qr2sCodePageModule { }
