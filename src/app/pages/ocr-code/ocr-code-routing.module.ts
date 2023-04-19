import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcrCodePage } from './ocr-code.page';

const routes: Routes = [
    {
        path: '',
        component: OcrCodePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OcrCodePageRoutingModule { }
