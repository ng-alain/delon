import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ACLGuard } from './acl-guard';
import { DelonACLConfig } from './acl.config';
import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';

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
