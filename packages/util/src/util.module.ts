import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AlainConfigService } from './config/config.service';

@NgModule({
  imports: [CommonModule],
})
export class DelonUtilModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonUtilModule,
      providers: [AlainConfigService],
    };
  }
}
