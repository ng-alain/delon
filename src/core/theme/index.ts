import { NgModule, ModuleWithProviders, InjectionToken, Optional, SkipSelf, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// region: import
import { AlainThemeOptions, ALAIN_THEME_OPTIONS } from './theme.options';

import { MenuService } from './services/menu/menu.service';
import { ColorsService } from './services/colors/colors.service';
import { ScrollService } from './services/scroll/scroll.service';
import { SettingsService } from './services/settings/settings.service';
import { TitleService } from './services/title/title.service';
import { ThemesService } from './services/themes/themes.service';
import { ALAIN_I18N_TOKEN, AlainI18NServiceFake } from './services/i18n/i18n';
import { _HttpClient } from './services/http/http.client';
const SERVICES = [ ColorsService, MenuService, ScrollService, SettingsService, ThemesService, TitleService, _HttpClient ];

import { ModalHelper } from './services/modal/modal.helper';
const HELPERS = [ ModalHelper ];

// components
const COMPONENTS = [  ];

// pipes
import { MomentDatePipe } from './pipes/date/moment-date.pipe';
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
const PIPES = [ MomentDatePipe, CNCurrencyPipe, KeysPipe, YNPipe ];

// endregion

// region: export

export { AlainThemeOptions, ALAIN_THEME_OPTIONS } from './theme.options';
export { preloaderFinished } from './services/preloader/preloader';
export * from './services/menu';
export { ColorsService } from './services/colors/colors.service';
export { ScrollService } from './services/scroll/scroll.service';
export * from './services/settings';
export { TitleService } from './services/title/title.service';
export * from './services/themes';
export { ALAIN_I18N_TOKEN, AlainI18NService } from './services/i18n/i18n';
export { ModalHelper } from './services/modal/modal.helper';
export { _HttpClient } from './services/http/http.client';
export { MomentDatePipe } from './pipes/date/moment-date.pipe';
export { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
export { KeysPipe } from './pipes/keys/keys.pipe';
export { YNPipe } from './pipes/yn/yn.pipe';

// endregion

// region: zorro modules

import { NzToolTipModule } from 'ng-zorro-antd';

const ZORROMODULES = [ NzToolTipModule ];

// endregion

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...ZORROMODULES
    ],
    declarations: [
        ...COMPONENTS,
        ...PIPES
    ],
    exports: [
        ...COMPONENTS,
        ...PIPES
    ]
})
export class AlainThemeModule {

    static forRoot(options?: AlainThemeOptions): ModuleWithProviders {
        return {
            ngModule: AlainThemeModule,
            providers: [
                { provide: ALAIN_THEME_OPTIONS, useValue: options || {} },
                { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake },
                ...SERVICES,
                ...HELPERS
            ]
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: AlainThemeModule,
            providers: [
                ...HELPERS
            ]
        };
    }
}
