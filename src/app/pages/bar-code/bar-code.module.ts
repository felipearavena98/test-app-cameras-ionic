import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarCodePageRoutingModule } from './bar-code-routing.module';

import { BarCodePage } from './bar-code.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BarCodePageRoutingModule
    ],
    declarations: [BarCodePage]
})
export class BarCodePageModule { }
