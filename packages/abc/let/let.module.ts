import { NgModule } from '@angular/core';

import { LetDirective } from './let.directive';

const DIRECTIVES = [LetDirective];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class LetModule {}
