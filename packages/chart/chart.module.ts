import { NgModule, ModuleWithProviders } from '@angular/core';

// region: all modules

import { AdG2BarModule } from './src/bar/bar.module';
import { AdG2CardModule } from './src/card/card.module';
import { AdG2ChartModule } from './src/chart/chart.module';
import { AdG2GaugeModule } from './src/gauge/gauge.module';
import { AdG2MiniAreaModule } from './src/mini-area/mini-area.module';
import { AdG2MiniBarModule } from './src/mini-bar/mini-bar.module';
import { AdG2MiniProgressModule } from './src/mini-progress/mini-progress.module';
import { AdG2PieModule } from './src/pie/pie.module';
import { AdG2RadarModule } from './src/radar/radar.module';
import { AdG2TagCloudModule } from './src/tag-cloud/tag-cloud.module';
import { AdG2TimelineModule } from './src/timeline/timeline.module';
import { AdG2WaterWaveModule } from './src/water-wave/water-wave.module';
import { NaNumberInfoModule } from './src/number-info/number-info.module';
import { NaTrendModule } from './src/trend/trend.module';

const MODULES = [
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
  NaNumberInfoModule,
  NaTrendModule
];

// endregion

@NgModule({
  imports: [
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
    NaNumberInfoModule.forRoot(),
    NaTrendModule.forRoot()
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
