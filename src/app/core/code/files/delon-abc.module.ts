export default `import { NgModule } from '@angular/core';

// #region all modules
import { AvatarListModule } from '@delon/abc/avatar-list';
import { CountDownModule } from '@delon/abc/count-down';
import { DatePickerModule } from '@delon/abc/date-picker';
import { DownFileModule } from '@delon/abc/down-file';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { ExceptionModule } from '@delon/abc/exception';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { FullContentModule } from '@delon/abc/full-content';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { LoadingModule } from '@delon/abc/loading';
import { HotkeyModule } from '@delon/abc/hotkey';
import { LodopModule } from '@delon/abc/lodop';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { ObserversModule } from '@delon/abc/observers';
import { PageHeaderModule } from '@delon/abc/page-header';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { ResultModule } from '@delon/abc/result';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { SEModule } from '@delon/abc/se';
import { SGModule } from '@delon/abc/sg';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { TagSelectModule } from '@delon/abc/tag-select';
import { MediaModule } from '@delon/abc/media';
import { XlsxModule } from '@delon/abc/xlsx';
import { OnboardingModule } from '@delon/abc/onboarding';
import { LetModule } from '@delon/abc/let';
import { AutoFocusModule } from '@delon/abc/auto-focus';
import { PdfModule } from '@delon/abc/pdf';

const MODULES = [
  ErrorCollectModule,
  FooterToolbarModule,
  DownFileModule,
  AvatarListModule,
  EllipsisModule,
  GlobalFooterModule,
  ExceptionModule,
  NoticeIconModule,
  ObserversModule,
  PageHeaderModule,
  ResultModule,
  TagSelectModule,
  CountDownModule,
  STModule,
  ReuseTabModule,
  FullContentModule,
  XlsxModule,
  LodopModule,
  QuickMenuModule,
  SVModule,
  SEModule,
  SGModule,
  DatePickerModule,
  LoadingModule,
  HotkeyModule,
  MediaModule,
  OnboardingModule,
  LetModule,
  AutoFocusModule,
  PdfModule,
];

@NgModule({ exports: MODULES })
export class DemoDelonABCModule {}
`;
