import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { DemoComponent } from './demo/demo.component';
import { DevHomeComponent } from './home/home.component';
import { DevLayoutComponent } from './layout.component';
import { DevPageComponent } from './pages/page.component';

const COMPONENTS = [DevLayoutComponent, DevHomeComponent, DevPageComponent, DemoComponent];

const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: '',
    component: DevLayoutComponent,
    children: [
      { path: '', component: DevHomeComponent },
      { path: 'l1', component: DevPageComponent },
      { path: 'l2', component: DevPageComponent },
      { path: 'l3', component: DevPageComponent },
      { path: 'l4', component: DevPageComponent },
      { path: 'l5', component: DevPageComponent },
      { path: 'l6', component: DevPageComponent },
      { path: 'l7', component: DevPageComponent },
      { path: 'l8', component: DevPageComponent },
      { path: 'login', component: DevPageComponent },
    ],
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class DevTestModule {}
