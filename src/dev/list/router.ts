import { Routes } from '@angular/router';

import { DevLayoutListComponent } from './layout.component';
import { DevListItemComponent } from './list-item.component';
import { DevListComponent } from './list.component';

export const routes: Routes = [
  {
    path: '',
    component: DevLayoutListComponent,
    children: [
      { path: '', component: DevListComponent },
      { path: 'item', component: DevListItemComponent }
    ]
  }
];
