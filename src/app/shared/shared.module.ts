import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
import { AlainThemeModule } from '@delon/theme';
import { AlainABCModule, SimpleTableConfig, FullContentService } from '@delon/abc';
import { AlainACLModule } from '@delon/acl';
import { DelonMockModule } from '@delon/mock';

// third libs
import { CountdownModule } from 'ngx-countdown';

// region: zorro modules

import {
    // LoggerModule,
    // NzLocaleModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    // NzCalendarModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    // NzCardModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzAvatarModule,
    // SERVICES
    NzNotificationService,
    NzMessageService
} from 'ng-zorro-antd';
const ZORROMODULES = [
    // LoggerModule,
    // NzLocaleModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    // NzCalendarModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    // NzCardModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzAvatarModule
];
// endregion

// region: @delon/abc modules
import {
    AdSimpleTableModule,
    AdAvatarListModule,
    AdChartsModule,
    AdCountDownModule,
    AdDescListModule,
    AdEllipsisModule,
    AdErrorCollectModule,
    AdExceptionModule,
    AdFooterToolbarModule,
    AdGlobalFooterModule,
    AdNoticeIconModule,
    AdNumberInfoModule,
    AdProHeaderModule,
    AdResultModule,
    AdSidebarNavModule,
    AdStandardFormRowModule,
    AdTagSelectModule,
    AdTrendModule,
    AdDownFileModule,
    AdImageModule,
    AdUtilsModule,
    AdFullContentModule,
    AdXlsxModule,
    AdNumberToChineseModule
} from '@delon/abc';
const ABCMODULES = [
    AdSimpleTableModule,
    AdAvatarListModule,
    AdChartsModule,
    AdCountDownModule,
    AdDescListModule,
    AdEllipsisModule,
    AdErrorCollectModule,
    AdExceptionModule,
    AdFooterToolbarModule,
    AdGlobalFooterModule,
    AdNoticeIconModule,
    AdNumberInfoModule,
    AdProHeaderModule,
    AdResultModule,
    AdSidebarNavModule,
    AdStandardFormRowModule,
    AdTagSelectModule,
    AdTrendModule,
    AdDownFileModule,
    AdImageModule,
    AdUtilsModule,
    AdFullContentModule,
    AdXlsxModule,
    AdNumberToChineseModule
];
// endregion

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule.forRoot(),
        AlainThemeModule.forChild(),
        ...ABCMODULES,
        AlainACLModule.forRoot(),
        DelonMockModule,
        // third libs
        CountdownModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule,
        ...ABCMODULES,
        AlainACLModule,
        DelonMockModule,
        // third libs
        CountdownModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // ng-zorro-antd Services
                NzNotificationService,
                NzMessageService,
                // @delon/abc
                SimpleTableConfig,
                FullContentService
            ]
        };
    }
}
