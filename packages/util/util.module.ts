import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyService } from './src/lazy/lazy.service';

@NgModule({
  imports: [CommonModule],
})
export class DelonUtilModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonUtilModule,
      providers: [LazyService],
    };
  }
}
