
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <page-header [title]="'页面标题'">
        <ng-template #breadcrumb>
            <nz-breadcrumb>
                <nz-breadcrumb-item><a>一级菜单</a></nz-breadcrumb-item>
                <nz-breadcrumb-item><a>二级菜单</a></nz-breadcrumb-item>
                <nz-breadcrumb-item><a>三级菜单</a></nz-breadcrumb-item>
            </nz-breadcrumb>
        </ng-template>
    </page-header>
    `
})
export class DemoComponent {
}
