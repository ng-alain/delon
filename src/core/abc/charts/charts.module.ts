import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartCardComponent } from './card/card.component';
import { MiniAreaComponent } from './mini-area/mini-area.component';
import { MiniBarComponent } from './mini-bar/mini-bar.component';
import { MiniProgressComponent } from './mini-progress/mini-progress.component';
import { G2BarComponent } from './bar/bar.component';
import { G2PieComponent } from './pie/pie.component';
import { TimelineComponent } from './timeline/timeline.component';
import { GaugeComponent } from './gauge/gauge.component';
import { TagCloudComponent } from './tag-cloud/tag-cloud.component';
import { WaterWaveComponent } from './water-wave/water-wave.component';
import { G2RadarComponent } from './radar/radar.component';
import { ChartComponent } from './chart/chart.component';

const COMPONENTS = [
    ChartCardComponent, MiniAreaComponent, MiniBarComponent, MiniProgressComponent,
    G2BarComponent, G2PieComponent, TimelineComponent, GaugeComponent, TagCloudComponent,
    WaterWaveComponent, G2RadarComponent, ChartComponent
];

// region: zorro modules

import { NzSpinModule, NzToolTipModule, NzGridModule } from 'ng-zorro-antd';
import { NzCardModule, NzDividerModule } from 'ng-zorro-antd-extra';

const ZORROMODULES = [
    NzSpinModule, NzToolTipModule, NzGridModule,
    NzCardModule, NzDividerModule
];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdChartsModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdChartsModule, providers: [] };
    }
}
