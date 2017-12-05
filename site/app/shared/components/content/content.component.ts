import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { I18NService } from '../../../i18n/service';
import { MetaService } from '../../../core/meta.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: [ './content.component.less' ],
    host: {
        '[class.main-wrapper]': 'true'
    }
})
export class ContentComponent implements OnInit {

    constructor(
        public meta: MetaService,
        public i18n: I18NService,
        public settings: SettingsService
    ) {}

    ngOnInit() {
    }

    get(i: any) {
        return i ? i[this.i18n.lang] || i[this.i18n.defaultLang] || i : '';
    }
}
