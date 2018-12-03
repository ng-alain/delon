import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';

import { CountDownComponent } from './count-down.component';

const COMPONENTS = [CountDownComponent];

@NgModule({
  imports: [CommonModule, CountdownModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CountDownModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CountDownModule, providers: [] };
  }
}
