import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';

import { NaCountDownComponent } from './count-down.component';

const COMPONENTS = [NaCountDownComponent];

@NgModule({
  imports: [CommonModule, CountdownModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaCountDownModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaCountDownModule, providers: [] };
  }
}
