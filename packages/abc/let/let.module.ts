import { NgModule } from '@angular/core';

import { LetDirective } from './let.directive';

const DIRECTIVES = [LetDirective];

/**
 * @deprecated Will be removed in v19, Please use `@let` instead.
 */
@NgModule({
  imports: DIRECTIVES,
  exports: DIRECTIVES
})
export class LetModule {}
