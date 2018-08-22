import { NgModule, ModuleWithProviders } from '@angular/core';

// region: all modules
import { AdErrorCollectModule } from './error-collect/error-collect.module';
import { AdFooterToolbarModule } from './footer-toolbar/footer-toolbar.module';
import { AdSidebarNavModule } from './sidebar-nav/sidebar-nav.module';
import { AdDownFileModule } from './down-file/down-file.module';
import { AdImageModule } from './image/image.module';
import { NaAvatarListModule } from './avatar-list/avatar-list.module';
import { AdDescListModule } from './desc-list/desc-list.module';
import { AdEllipsisModule } from './ellipsis/ellipsis.module';
import { AdGlobalFooterModule } from './global-footer/global-footer.module';
import { AdExceptionModule } from './exception/exception.module';
import { AdNoticeIconModule } from './notice-icon/notice-icon.module';
import { AdNumberInfoModule } from './number-info/number-info.module';
import { AdPageHeaderModule } from './page-header/page-header.module';
import { AdResultModule } from './result/result.module';
import { AdStandardFormRowModule } from './standard-form-row/standard-form-row.module';
import { AdTagSelectModule } from './tag-select/tag-select.module';
import { AdTrendModule } from './trend/trend.module';
import { NaCountDownModule } from './count-down/count-down.module';
import { AdSimpleTableModule } from './simple-table/simple-table.module';
import { AdReuseTabModule } from './reuse-tab/reuse-tab.module';
import { AdFullContentModule } from './full-content/full-content.module';
import { AdXlsxModule } from './xlsx/xlsx.module';
import { AdZipModule } from './zip/zip.module';
import { AdNumberToChineseModule } from './number-to-chinese/number-to-chinese.module';
import { AdLodopModule } from './lodop/lodop.module';
import { AdQuickMenuModule } from './quick-menu/quick-menu.module';
import { AdQRModule } from './qr/qr.module';
import { AdSHFModule } from './simple-html-form/module';

const MODULES = [
  AdErrorCollectModule,
  AdFooterToolbarModule,
  AdSidebarNavModule,
  AdDownFileModule,
  AdImageModule,
  NaAvatarListModule,
  AdDescListModule,
  AdEllipsisModule,
  AdGlobalFooterModule,
  AdExceptionModule,
  AdNoticeIconModule,
  AdNumberInfoModule,
  AdPageHeaderModule,
  AdResultModule,
  AdStandardFormRowModule,
  AdTagSelectModule,
  AdTrendModule,
  NaCountDownModule,
  AdSimpleTableModule,
  AdReuseTabModule,
  AdFullContentModule,
  AdXlsxModule,
  AdZipModule,
  AdNumberToChineseModule,
  AdLodopModule,
  AdQuickMenuModule,
  AdQRModule,
  AdSHFModule,
];

// endregion

@NgModule({
  imports: [
    AdErrorCollectModule.forRoot(),
    AdFooterToolbarModule.forRoot(),
    AdSidebarNavModule.forRoot(),
    AdDownFileModule.forRoot(),
    AdImageModule.forRoot(),
    NaAvatarListModule.forRoot(),
    AdDescListModule.forRoot(),
    AdEllipsisModule.forRoot(),
    AdExceptionModule.forRoot(),
    AdExceptionModule.forRoot(),
    AdNoticeIconModule.forRoot(),
    AdNumberInfoModule.forRoot(),
    AdPageHeaderModule.forRoot(),
    AdResultModule.forRoot(),
    AdStandardFormRowModule.forRoot(),
    AdTagSelectModule.forRoot(),
    AdTrendModule.forRoot(),
    NaCountDownModule.forRoot(),
    AdSimpleTableModule.forRoot(),
    AdReuseTabModule.forRoot(),
    AdFullContentModule.forRoot(),
    AdXlsxModule.forRoot(),
    AdZipModule.forRoot(),
    AdNumberToChineseModule.forRoot(),
    AdLodopModule.forRoot(),
    AdQuickMenuModule.forRoot(),
    AdQRModule.forRoot(),
    AdSHFModule.forRoot(),
  ],
  exports: MODULES,
})
export class DelonABCRootModule {}

@NgModule({ exports: MODULES })
export class DelonABCModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: DelonABCRootModule };
  }
}
