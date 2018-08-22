import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaFullContentComponent } from './full-content.component';
import { NaFullContentToggleDirective } from './full-content-toggle.directive';
import { NaFullContentService } from './full-content.service';

const COMPONENTS = [NaFullContentComponent, NaFullContentToggleDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaFullContentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NaFullContentModule,
      providers: [NaFullContentService],
    };
  }
}
