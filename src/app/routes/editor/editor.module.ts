import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UEditorModule } from 'ngx-ueditor';
import { NgxTinymceModule } from 'ngx-tinymce';

import { SharedModule } from '../../shared//shared.module';

import { UeditorComponent } from './ueditor/ueditor.component';
import { TinymceComponent } from './tinymce/tinymce.component';

const routes: Routes = [
    { path: 'ueditor', component: UeditorComponent },
    { path: 'tinymce', component: TinymceComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        UEditorModule.forRoot({
            // **注：** 建议使用本地路径；以下为了减少 ng-alain 脚手架的包体大小引用了CDN，可能会有部分功能受影响
            js: [
              `//apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.config.js`,
              `//apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.all.min.js`
            ],
            options: {
              UEDITOR_HOME_URL: `//apps.bdimg.com/libs/ueditor/1.4.3.1/`
            }
        }),
        NgxTinymceModule.forRoot({
            baseURL: '//cdn.bootcss.com/tinymce/4.7.4/'
        })
    ],
    declarations: [UeditorComponent, TinymceComponent],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class EditorModule { }
