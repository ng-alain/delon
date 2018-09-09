import { NgModule, ModuleWithProviders } from '@angular/core';

// region: all modules

import { G2BarModule } from './src/bar/bar.module';
import { G2CardModule } from './src/card/card.module';
import { G2ChartModule } from './src/chart/chart.module';
import { G2GaugeModule } from './src/gauge/gauge.module';
import { G2MiniAreaModule } from './src/mini-area/mini-area.module';
import { G2MiniBarModule } from './src/mini-bar/mini-bar.module';
import { G2MiniProgressModule } from './src/mini-progress/mini-progress.module';
import { G2PieModule } from './src/pie/pie.module';
import { G2RadarModule } from './src/radar/radar.module';
import { G2TagCloudModule } from './src/tag-cloud/tag-cloud.module';
import { G2TimelineModule } from './src/timeline/timeline.module';
import { G2WaterWaveModule } from './src/water-wave/water-wave.module';
import { NumberInfoModule } from './src/number-info/number-info.module';
import { TrendModule } from './src/trend/trend.module';

const MODULES = [
  G2BarModule,
  G2CardModule,
  G2ChartModule,
  G2GaugeModule,
  G2MiniAreaModule,
  G2MiniBarModule,
  G2MiniProgressModule,
  G2PieModule,
  G2RadarModule,
  G2TagCloudModule,
  G2TimelineModule,
  G2WaterWaveModule,
  NumberInfoModule,
  TrendModule
];

// endregion

@NgModule({
  imports: [
    G2BarModule.forRoot(),
    G2CardModule.forRoot(),
    G2ChartModule.forRoot(),
    G2GaugeModule.forRoot(),
    G2MiniAreaModule.forRoot(),
    G2MiniBarModule.forRoot(),
    G2MiniProgressModule.forRoot(),
    G2PieModule.forRoot(),
    G2RadarModule.forRoot(),
    G2TagCloudModule.forRoot(),
    G2TimelineModule.forRoot(),
    G2WaterWaveModule.forRoot(),
    NumberInfoModule.forRoot(),
    TrendModule.forRoot()
  ],
  exports: MODULES,
})
export class DelonChartRootModule {}

@NgModule({ exports: MODULES })
export class DelonChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: DelonChartRootModule };
  }
}
