import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { I18NService } from '../../i18n/service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ './footer.component.less' ],
    host: {
        '[attr.id]': '"footer"',
        '[class.dark]': 'true'
    }
})
export class FooterComponent {
    constructor(public i18n: I18NService, private router: Router) {}

    langChange() {
        let url = this.router.url.split('#')[0].split('?')[0];
        url += `?lang=${this.i18n.isZh ? 'en-US' : 'zh-CN'}`;

        this.router.navigateByUrl(url);
    }

}
