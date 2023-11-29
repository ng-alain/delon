import { NgModule } from '@angular/core';

import { LetDirective } from './let.directive';

const DIRECTIVES = [LetDirective];

@NgModule({
  imports: DIRECTIVES,
  exports: DIRECTIVES
})
export class LetModule {}
