import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { copy } from '@delon/abc';
import { NzMessageService } from 'ng-zorro-antd';
import { I18NService } from '../../i18n/service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    host: {
        '[attr.id]': '"footer"',
        '[class.dark]': 'true'
    }
})
export class FooterComponent {
    constructor(public i18n: I18NService, private router: Router, private msg: NzMessageService) {}

    langChange() {
        let url = this.router.url.split('#')[0].split('?')[0];
        url += `?lang=${this.i18n.isZh ? 'en-US' : 'zh-CN'}`;

        this.router.navigateByUrl(url);
    }

    onCopy(value: string) {
        copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
    }

}
