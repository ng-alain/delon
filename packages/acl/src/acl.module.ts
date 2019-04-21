import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ACLIfDirective } from './acl-if.directive';
import { ACLDirective } from './acl.directive';

const COMPONENTS = [ACLDirective, ACLIfDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class DelonACLModule {}
