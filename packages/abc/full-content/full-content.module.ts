import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullContentComponent } from './full-content.component';
import { FullContentToggleDirective } from './full-content-toggle.directive';
import { FullContentService } from './full-content.service';

const COMPONENTS = [FullContentComponent, FullContentToggleDirective];

@NgModule({
  imports: [CommonModule],
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
