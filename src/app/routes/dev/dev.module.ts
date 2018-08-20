import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { DemoComponent } from './demo/demo.component';

// region: components

const COMPONENTS = [DemoComponent];

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
  },
];
// endregion

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class DevTestModule {}
