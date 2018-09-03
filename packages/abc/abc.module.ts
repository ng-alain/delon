import { NgModule, ModuleWithProviders } from '@angular/core';

// region: all modules
import { NaTableModule } from './table/module';
import { NaViewModule } from './view/module';
import { NaEditModule } from './edit/module';
import { NaErrorCollectModule } from './error-collect/error-collect.module';
import { NaFooterToolbarModule } from './footer-toolbar/footer-toolbar.module';
import { NaSidebarNavModule } from './sidebar-nav/sidebar-nav.module';
import { NaDownFileModule } from './down-file/down-file.module';
import { NaImageModule } from './image/image.module';
import { NaAvatarListModule } from './avatar-list/avatar-list.module';
import { NaEllipsisModule } from './ellipsis/ellipsis.module';
import { NaGlobalFooterModule } from './global-footer/global-footer.module';
import { NaExceptionModule } from './exception/exception.module';
import { NaNoticeIconModule } from './notice-icon/notice-icon.module';
import { NaPageHeaderModule } from './page-header/page-header.module';
import { NaResultModule } from './result/result.module';
import { NaTagSelectModule } from './tag-select/tag-select.module';
import { NaCountDownModule } from './count-down/count-down.module';
import { NaReuseTabModule } from './reuse-tab/reuse-tab.module';
import { NaFullContentModule } from './full-content/full-content.module';
import { NaXlsxModule } from './xlsx/xlsx.module';
import { NaZipModule } from './zip/zip.module';
import { NaNumberToChineseModule } from './number-to-chinese/number-to-chinese.module';
import { NaLodopModule } from './lodop/lodop.module';
import { NaQuickMenuModule } from './quick-menu/quick-menu.module';
import { NaQRModule } from './qr/qr.module';
import { NaDatePickerModule } from './date-picker/date-picker.module';

const MODULES = [
  NaErrorCollectModule,
  NaFooterToolbarModule,
  NaSidebarNavModule,
  NaDownFileModule,
  NaImageModule,
  NaAvatarListModule,
  NaEllipsisModule,
  NaGlobalFooterModule,
  NaExceptionModule,
  NaNoticeIconModule,
  NaPageHeaderModule,
  NaResultModule,
  NaTagSelectModule,
  NaCountDownModule,
  NaTableModule,
  NaReuseTabModule,
  NaFullContentModule,
  NaXlsxModule,
  NaZipModule,
  NaNumberToChineseModule,
  NaLodopModule,
  NaQuickMenuModule,
  NaQRModule,
  NaViewModule,
  NaEditModule,
  NaDatePickerModule
];

// endregion

@NgModule({
  imports: [
    NaErrorCollectModule.forRoot(),
    NaFooterToolbarModule.forRoot(),
    NaSidebarNavModule.forRoot(),
    NaDownFileModule.forRoot(),
    NaImageModule.forRoot(),
    NaAvatarListModule.forRoot(),
    NaEllipsisModule.forRoot(),
    NaExceptionModule.forRoot(),
    NaExceptionModule.forRoot(),
    NaNoticeIconModule.forRoot(),
    NaPageHeaderModule.forRoot(),
    NaResultModule.forRoot(),
    NaTagSelectModule.forRoot(),
    NaCountDownModule.forRoot(),
    NaTableModule.forRoot(),
    NaReuseTabModule.forRoot(),
    NaFullContentModule.forRoot(),
    NaXlsxModule.forRoot(),
    NaZipModule.forRoot(),
    NaNumberToChineseModule.forRoot(),
    NaLodopModule.forRoot(),
    NaQuickMenuModule.forRoot(),
    NaQRModule.forRoot(),
    NaViewModule.forRoot(),
    NaEditModule.forRoot(),
    NaDatePickerModule.forRoot()
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
