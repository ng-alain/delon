import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule, ContentComponent } from '@shared';

// #region components
{{{imports}}}
const COMPONENTS = [{{{components}}}];

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {{{routes}}}
    ]
  }
];
// #endregion

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS
})
export class {{moduleName}}Module {

}
