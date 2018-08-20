import { Injectable } from '@angular/core';
import { TitleService } from '@delon/theme';
import { I18NService } from '../core/i18n/service';

@Injectable()
export class StartupService {
    constructor(private i18N: I18NService, private title: TitleService) {}

    load(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.title.suffix = 'Ng Alain';
            this.i18N.use(this.i18N.defaultLang);
            resolve();
        });
    }
}
