import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StringTemplateOutletDirective } from './addon/string_template_outlet';

@NgModule({
  imports: [CommonModule],
  declarations: [StringTemplateOutletDirective],
  exports: [StringTemplateOutletDirective],
})
export class DelonUtilModule {}
