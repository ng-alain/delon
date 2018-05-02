import { Injectable, Injector, Inject } from '@angular/core';
import { NzI18nService, zh_CN } from 'ng-zorro-antd';
import * as df_zh_cn from 'date-fns/locale/zh_cn';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';

@Injectable()
export class StartupService {
    constructor(private injector: Injector) { }

    load(): Promise<any> {
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise((resolve, reject) => {
            const nzI18n = this.injector.get(NzI18nService);
            nzI18n.setLocale(zh_CN);
            registerLocaleData(zh);
            resolve(null);
        });
    }
}