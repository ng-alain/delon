import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StringTemplateOutletDirective } from './addon/string_template_outlet';

@NgModule({
  imports: [CommonModule],
  declarations: [StringTemplateOutletDirective],
  exports: [StringTemplateOutletDirective]
})
export class DelonUtilModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonUtilModule
    };
  }
}
