import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SGContainerComponent } from './sg-container.component';
import { SGComponent } from './sg.component';

const COMPONENTS = [SGContainerComponent, SGComponent];

@NgModule({
  imports: [CommonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class SGModule {}
