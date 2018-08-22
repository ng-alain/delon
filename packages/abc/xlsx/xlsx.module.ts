import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';
import { NaXlsxService } from './xlsx.service';
import { NaXlsxDirective } from './xlsx.directive';
import { NaXlsxConfig, DA_XLSX_CONFIG } from './interface';

const COMPONENTS = [NaXlsxDirective];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaXlsxModule {
  static forRoot(config?: NaXlsxConfig): ModuleWithProviders {
    return {
      ngModule: NaXlsxModule,
      providers: [NaXlsxService, { provide: DA_XLSX_CONFIG, useValue: config }],
    };
  }
}
