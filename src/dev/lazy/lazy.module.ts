import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../app/shared/shared.module';
import { DevLazyLayoutComponent } from './layout.component';
import { DevLazyPageComponent } from './test.component';

const COMPONENTS = [DevLazyLayoutComponent, DevLazyPageComponent];

const routes: Routes = [
  {
    path: '',
    component: DevLazyLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'p1' },
      { path: 'p1', component: DevLazyPageComponent },
      { path: 'p2', component: DevLazyPageComponent },
      { path: 'p3', component: DevLazyPageComponent },
      { path: 'p4', component: DevLazyPageComponent },
      { path: 'p5', component: DevLazyPageComponent },
      { path: ':id/view', component: DevLazyPageComponent },
    ],
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class DevLazyModule {}
