import { NgModule, ModuleWithProviders } from '@angular/core';

// region: all modules
import { STModule } from './table/table.module';
import { SVModule } from './view/view.module';
import { SEModule } from './edit/edit.module';
import { ErrorCollectModule } from './error-collect/error-collect.module';
import { FooterToolbarModule } from './footer-toolbar/footer-toolbar.module';
import { SidebarNavModule } from './sidebar-nav/sidebar-nav.module';
import { DownFileModule } from './down-file/down-file.module';
import { ImageModule } from './image/image.module';
import { AvatarListModule } from './avatar-list/avatar-list.module';
import { EllipsisModule } from './ellipsis/ellipsis.module';
import { GlobalFooterModule } from './global-footer/global-footer.module';
import { ExceptionModule } from './exception/exception.module';
import { NoticeIconModule } from './notice-icon/notice-icon.module';
import { PageHeaderModule } from './page-header/page-header.module';
import { ResultModule } from './result/result.module';
import { TagSelectModule } from './tag-select/tag-select.module';
import { CountDownModule } from './count-down/count-down.module';
import { ReuseTabModule } from './reuse-tab/reuse-tab.module';
import { FullContentModule } from './full-content/full-content.module';
import { XlsxModule } from './xlsx/xlsx.module';
import { ZipModule } from './zip/zip.module';
import { NumberToChineseModule } from './number-to-chinese/number-to-chinese.module';
import { LodopModule } from './lodop/lodop.module';
import { QuickMenuModule } from './quick-menu/quick-menu.module';
import { QRModule } from './qr/qr.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { SGModule } from './grid/grid.module';

const MODULES = [
  ErrorCollectModule,
  FooterToolbarModule,
  SidebarNavModule,
  DownFileModule,
  ImageModule,
  AvatarListModule,
  EllipsisModule,
  GlobalFooterModule,
  ExceptionModule,
  NoticeIconModule,
  PageHeaderModule,
  ResultModule,
  TagSelectModule,
  CountDownModule,
  STModule,
  ReuseTabModule,
  FullContentModule,
  XlsxModule,
  ZipModule,
  NumberToChineseModule,
  LodopModule,
  QuickMenuModule,
  QRModule,
  SVModule,
  SEModule,
  SGModule,
  DatePickerModule
];

// endregion

@NgModule({
  imports: [
    ErrorCollectModule.forRoot(),
    FooterToolbarModule.forRoot(),
    SidebarNavModule.forRoot(),
    DownFileModule.forRoot(),
    ImageModule.forRoot(),
    AvatarListModule.forRoot(),
    EllipsisModule.forRoot(),
    ExceptionModule.forRoot(),
    ExceptionModule.forRoot(),
    NoticeIconModule.forRoot(),
    PageHeaderModule.forRoot(),
    ResultModule.forRoot(),
    TagSelectModule.forRoot(),
    CountDownModule.forRoot(),
    STModule.forRoot(),
    ReuseTabModule.forRoot(),
    FullContentModule.forRoot(),
    XlsxModule.forRoot(),
    ZipModule.forRoot(),
    NumberToChineseModule.forRoot(),
    LodopModule.forRoot(),
    QuickMenuModule.forRoot(),
    QRModule.forRoot(),
    SVModule.forRoot(),
    SEModule.forRoot(),
    SGModule.forRoot(),
    DatePickerModule.forRoot()
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
