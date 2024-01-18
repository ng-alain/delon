import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CountdownModule } from 'ngx-countdown';

import { CountDownComponent } from './count-down.component';

const COMPONENTS = [CountDownComponent];

@NgModule({
  imports: [CommonModule, CountdownModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class CountDownModule {}
