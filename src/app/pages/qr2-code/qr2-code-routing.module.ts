import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qr2CodePage } from './qr2-code.page';

const routes: Routes = [
    {
        path: '',
        component: Qr2CodePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Qr2CodePageRoutingModule { }
