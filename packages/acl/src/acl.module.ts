import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { ACLIfDirective } from './acl-if.directive';
import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';

const COMPONENTS = [ACLDirective, ACLIfDirective];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class DelonACLModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonACLModule,
      providers: [ACLService],
    };
  }
}
