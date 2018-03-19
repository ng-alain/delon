import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronService } from './electron.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        ElectronService
    ]
})
export class ElectronModule { }
