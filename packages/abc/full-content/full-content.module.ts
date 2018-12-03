import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { FullContentToggleDirective } from './full-content-toggle.directive';
import { FullContentComponent } from './full-content.component';
import { FullContentService } from './full-content.service';

const COMPONENTS = [FullContentComponent, FullContentToggleDirective];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class FullContentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FullContentModule,
      providers: [FullContentService],
    };
  }
}
