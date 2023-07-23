import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevLayoutListComponent } from './layout.component';
import { DevListItemComponent } from './list-item.component';
import { DevListComponent } from './list.component';
import { SharedModule } from '../../app/shared/shared.module';

const COMPONENTS = [DevLayoutListComponent, DevListComponent, DevListItemComponent];

const routes: Routes = [
  {
    path: '',
    component: DevLayoutListComponent,
    children: [
      { path: '', component: DevListComponent },
      { path: 'item', component: DevListItemComponent }
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS
})
export class DevListModule {}
