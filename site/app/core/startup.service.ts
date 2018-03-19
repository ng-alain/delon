import { Injectable } from '@angular/core';
import { I18NService } from '../i18n/service';
import { TitleService } from '../core/title.service';

@Injectable()
export class StartupService {
    constructor(private i18N: I18NService, private title: TitleService) {}

    load(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.title.suffix = 'ng-alain';
            this.i18N.use(this.i18N.defaultLang);
            resolve();
        });
    }
}
