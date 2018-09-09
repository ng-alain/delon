import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelonACLConfig } from './acl.config';
import { ACLGuard } from './acl-guard';
import { ACLService } from './acl.service';
import { ACLDirective } from './acl.directive';

const SERVICES = [ACLService, ACLGuard];
const COMPONENTS = [ACLDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class DelonACLModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonACLModule,
      providers: [DelonACLConfig, ...SERVICES],
    };
  }
}
