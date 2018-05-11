import { NgModule, ModuleWithProviders } from '@angular/core';

// region: all modules
import { AdErrorCollectModule } from './error-collect/error-collect.module';
import { AdFooterToolbarModule } from './footer-toolbar/footer-toolbar.module';
import { AdSidebarNavModule } from './sidebar-nav/sidebar-nav.module';
import { AdDownFileModule } from './down-file/down-file.module';
import { AdImageModule } from './image/image.module';
import { AdAvatarListModule } from './avatar-list/avatar-list.module';
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
import { AdCountDownModule } from './count-down/count-down.module';
import { AdSimpleTableModule } from './simple-table/simple-table.module';
import { AdReuseTabModule } from './reuse-tab/reuse-tab.module';
import { AdFullContentModule } from './full-content/full-content.module';
import { AdXlsxModule } from './xlsx/xlsx.module';
import { AdZipModule } from './zip/zip.module';
import { AdNumberToChineseModule } from './number-to-chinese/number-to-chinese.module';
import { AdLodopModule } from './lodop/lodop.module';
import { AdQuickMenuModule } from './quick-menu/quick-menu.module';
import { AdQRModule } from './qr/qr.module';
// charts
import { AdG2BarModule } from './charts/bar/bar.module';
import { AdG2CardModule } from './charts/card/card.module';
import { AdG2ChartModule } from './charts/chart/chart.module';
import { AdG2GaugeModule } from './charts/gauge/gauge.module';
import { AdG2MiniAreaModule } from './charts/mini-area/mini-area.module';
import { AdG2MiniBarModule } from './charts/mini-bar/mini-bar.module';
import { AdG2MiniProgressModule } from './charts/mini-progress/mini-progress.module';
import { AdG2PieModule } from './charts/pie/pie.module';
import { AdG2RadarModule } from './charts/radar/radar.module';
import { AdG2TagCloudModule } from './charts/tag-cloud/tag-cloud.module';
import { AdG2TimelineModule } from './charts/timeline/timeline.module';
import { AdG2WaterWaveModule } from './charts/water-wave/water-wave.module';

const MODULES = [
  AdErrorCollectModule,
  AdFooterToolbarModule,
  AdSidebarNavModule,
  AdDownFileModule,
  AdImageModule,
  AdAvatarListModule,
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
  AdCountDownModule,
  AdSimpleTableModule,
  AdReuseTabModule,
  AdFullContentModule,
  AdXlsxModule,
  AdZipModule,
  AdNumberToChineseModule,
  AdLodopModule,
  AdQuickMenuModule,
  AdQRModule,
  // charts
  AdG2BarModule,
  AdG2CardModule,
  AdG2ChartModule,
  AdG2GaugeModule,
  AdG2MiniAreaModule,
  AdG2MiniBarModule,
  AdG2MiniProgressModule,
  AdG2PieModule,
  AdG2RadarModule,
  AdG2TagCloudModule,
  AdG2TimelineModule,
  AdG2WaterWaveModule,
];

// endregion

@NgModule({
  imports: [
    AdErrorCollectModule.forRoot(),
    AdFooterToolbarModule.forRoot(),
    AdSidebarNavModule.forRoot(),
    AdDownFileModule.forRoot(),
    AdImageModule.forRoot(),
    AdAvatarListModule.forRoot(),
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
    AdCountDownModule.forRoot(),
    AdSimpleTableModule.forRoot(),
    AdReuseTabModule.forRoot(),
    AdFullContentModule.forRoot(),
    AdXlsxModule.forRoot(),
    AdZipModule.forRoot(),
    AdNumberToChineseModule.forRoot(),
    AdLodopModule.forRoot(),
    AdQuickMenuModule.forRoot(),
    AdQRModule.forRoot(),
    // charts
    AdG2BarModule.forRoot(),
    AdG2CardModule.forRoot(),
    AdG2ChartModule.forRoot(),
    AdG2GaugeModule.forRoot(),
    AdG2MiniAreaModule.forRoot(),
    AdG2MiniBarModule.forRoot(),
    AdG2MiniProgressModule.forRoot(),
    AdG2PieModule.forRoot(),
    AdG2RadarModule.forRoot(),
    AdG2TagCloudModule.forRoot(),
    AdG2TimelineModule.forRoot(),
    AdG2WaterWaveModule.forRoot(),
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
