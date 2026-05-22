import { Routes } from '@angular/router';
import { ContentComponent } from '@shared';

{{imports}}

export const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {{routes}}
    ]
  }
];
