import { NgModule } from '@angular/core';

import { FilterPipe } from './filter.pipe';

const PIPES = [FilterPipe];

@NgModule({
  imports: PIPES,
  exports: PIPES
})
export class FilterPipeModule {}
