import { Component } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { I18NService } from '../../../i18n/service';
import { MetaService } from '../../../core/meta.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    host: {
        '[class.main-wrapper]': 'true'
    }
})
export class ContentComponent {
    constructor(
        public meta: MetaService,
        public i18n: I18NService,
        public settings: SettingsService
    ) {}
}
