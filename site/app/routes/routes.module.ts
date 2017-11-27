import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component';

const COMPONENTS = [
    HomeComponent
];

const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            // region: region routers
            { path: 'docs', loadChildren: './gen/docs/docs.module#DocsModule' },
            { path: 'components', loadChildren: './gen/components/components.module#ComponentsModule' }
            // endregion
        ]
    },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [
        ...COMPONENTS
    ]
})
export class RoutesModule {

}
