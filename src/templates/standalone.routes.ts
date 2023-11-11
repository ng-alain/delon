import { Routes } from '@angular/router';
import { ContentComponent } from '../../../shared/components/content/content.component';

// #region components
{{{imports}}}

export const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            {{{routes}}}
        ]
    }
];
// #endregion
