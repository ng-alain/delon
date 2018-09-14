import { NgModule, ModuleWithProviders } from '@angular/core';

// region: all modules
import { STModule } from '@delon/abc/table';
import { SVModule } from '@delon/abc/view';
import { SEModule } from '@delon/abc/edit';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { SidebarNavModule } from '@delon/abc/sidebar-nav';
import { DownFileModule } from '@delon/abc/down-file';
import { ImageModule } from '@delon/abc/image';
import { AvatarListModule } from '@delon/abc/avatar-list';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { ExceptionModule } from '@delon/abc/exception';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { PageHeaderModule } from '@delon/abc/page-header';
import { ResultModule } from '@delon/abc/result';
import { TagSelectModule } from '@delon/abc/tag-select';
import { CountDownModule } from '@delon/abc/count-down';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { FullContentModule } from '@delon/abc/full-content';
import { XlsxModule } from '@delon/abc/xlsx';
import { ZipModule } from '@delon/abc/zip';
import { NumberToChineseModule } from '@delon/abc/number-to-chinese';
import { LodopModule } from '@delon/abc/lodop';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { QRModule } from '@delon/abc/qr';
import { DatePickerModule } from '@delon/abc/date-picker';
import { SGModule } from '@delon/abc/grid';

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
  DatePickerModule,
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
    DatePickerModule.forRoot(),
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
