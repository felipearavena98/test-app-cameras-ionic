import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/tabs/qr-code',
        pathMatch: 'full',
    },
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'qr-code',
                loadChildren: () => import('../qr-code/qr-code.module').then(m => m.QrCodePageModule)
            },
            {
                path: 'ocr-code',
                loadChildren: () => import('../ocr-code/ocr-code.module').then(m => m.OcrCodePageModule)
            },
            {
                path: 'bar-code',
                loadChildren: () => import('../bar-code/bar-code.module').then(m => m.BarCodePageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule { }
