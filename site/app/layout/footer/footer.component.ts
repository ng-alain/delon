import { Component } from '@angular/core';
import { copy } from '@delon/abc';
import { NzMessageService } from 'ng-zorro-antd';
import { I18NService } from '../../core/i18n/service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    host: {
        '[attr.id]': '"footer"',
        '[class.dark]': 'true'
    }
})
export class FooterComponent {
    constructor(public i18n: I18NService, private msg: NzMessageService) {}

    onCopy(value: string) {
        copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
    }

}
