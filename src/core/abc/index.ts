import { NgModule, ModuleWithProviders } from '@angular/core';

// region: all modules
import { AdErrorCollectModule } from './components/error-collect/error-collect.module';
import { AdFooterToolbarModule } from './components/footer-toolbar/footer-toolbar.module';
import { AdSidebarNavModule } from './components/sidebar-nav/sidebar-nav.module';
import { AdDownFileModule } from './directives/down-file/down-file.module';
import { AdImageModule } from './directives/image/image.module';
import { AdAvatarListModule } from './components/avatar-list/avatar-list.module';
import { AdDescListModule } from './components/desc-list/desc-list.module';
import { AdEllipsisModule } from './components/ellipsis/ellipsis.module';
import { AdGlobalFooterModule } from './components/global-footer/global-footer.module';
import { AdExceptionModule } from './components/exception/exception.module';
import { AdNoticeIconModule } from './components/notice-icon/notice-icon.module';
import { AdNumberInfoModule } from './components/number-info/number-info.module';
import { AdProHeaderModule } from './components/pro-header/pro-header.module';
import { AdResultModule } from './components/result/result.module';
import { AdStandardFormRowModule } from './components/standard-form-row/standard-form-row.module';
import { AdTagSelectModule } from './components/tag-select/tag-select.module';
import { AdTrendModule } from './components/trend/trend.module';
import { AdUtilsModule } from './components/utils/utils.module';
import { AdChartsModule } from './components/charts/charts.module';
import { AdCountDownModule } from './components/count-down/count-down.module';
import { AdSimpleTableModule } from './components/simple-table/simple-table.module';
import { AdReuseTabModule } from './components/reuse-tab/reuse-tab.module';
import { AdFullContentModule } from './components/full-content/full-content.module';
import { AdXlsxModule } from './components/xlsx/xlsx.module';

const MODULES = [
    AdErrorCollectModule, AdFooterToolbarModule, AdSidebarNavModule, AdDownFileModule, AdImageModule,
    AdAvatarListModule, AdDescListModule, AdEllipsisModule, AdGlobalFooterModule, AdExceptionModule,
    AdNoticeIconModule, AdNumberInfoModule, AdProHeaderModule, AdResultModule, AdStandardFormRowModule,
    AdTagSelectModule, AdTrendModule, AdUtilsModule, AdChartsModule, AdCountDownModule, AdSimpleTableModule,
    AdReuseTabModule, AdFullContentModule, AdXlsxModule
];

// endregion

// region: export

export * from './components/error-collect';
export * from './components/footer-toolbar';
export * from './components/sidebar-nav';
export * from './directives/down-file';
export * from './directives/image';
export * from './components/avatar-list';
export * from './components/desc-list';
export * from './components/ellipsis';
export * from './components/global-footer';
export * from './components/exception';
export * from './components/notice-icon';
export * from './components/number-info';
export * from './components/pro-header';
export * from './components/result';
export * from './components/standard-form-row';
export * from './components/tag-select';
export * from './components/trend';
export * from './components/utils';
export * from './components/charts';
export * from './components/count-down';
export * from './components/simple-table';
export * from './components/reuse-tab';
export * from './components/full-content';
export * from './components/xlsx';

// endregion

@NgModule({
    imports: [
        AdErrorCollectModule.forRoot(), AdFooterToolbarModule.forRoot(), AdSidebarNavModule.forRoot(), AdDownFileModule.forRoot(), AdImageModule.forRoot(),
        AdAvatarListModule.forRoot(), AdDescListModule.forRoot(), AdEllipsisModule.forRoot(), AdExceptionModule.forRoot(), AdExceptionModule.forRoot(),
        AdNoticeIconModule.forRoot(), AdNumberInfoModule.forRoot(), AdProHeaderModule.forRoot(), AdResultModule.forRoot(), AdStandardFormRowModule.forRoot(),
        AdTagSelectModule.forRoot(), AdTrendModule.forRoot(), AdUtilsModule.forRoot(), AdChartsModule.forRoot(), AdCountDownModule.forRoot(), AdSimpleTableModule.forRoot(),
        AdReuseTabModule.forRoot(), AdFullContentModule.forRoot(), AdXlsxModule.forRoot()
    ],
    exports: MODULES
})
export class AlainABCRootModule {
}

@NgModule({ exports: MODULES })
export class AlainABCModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: AlainABCRootModule };
    }
}
