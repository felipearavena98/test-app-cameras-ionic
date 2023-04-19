import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { OcrCodePageRoutingModule } from './ocr-code-routing.module';
import { OcrCodePage } from './ocr-code.page';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        OcrCodePageRoutingModule,
        ZXingScannerModule,
        FormsModule
    ],
    declarations: [OcrCodePage]
})
export class OcrCodePageModule { }
