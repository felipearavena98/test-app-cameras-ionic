import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarCodePage } from './bar-code.page';

const routes: Routes = [
    {
        path: '',
        component: BarCodePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BarCodePageRoutingModule { }
