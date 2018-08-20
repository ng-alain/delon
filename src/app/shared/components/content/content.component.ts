import { Component } from '@angular/core';
import { I18NService } from '../../../core/i18n/service';
import { MetaService } from '../../../core/meta.service';
import { MobileService } from '../../../core/mobile.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    host: {
        '[class.main-wrapper]': 'true'
    }
})
export class ContentComponent {
    isMobile: boolean;
    constructor(
        public meta: MetaService,
        public i18n: I18NService,
        private mobileSrv: MobileService
    ) {
        this.mobileSrv.change.subscribe(res => this.isMobile = res);
    }

    to(url: string) {
        this.opened = false;
    }

    opened = false;
}
