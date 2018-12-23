import { Component, Inject } from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { copy } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd';
import { I18NService } from '../../core/i18n/service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  host: {
    '[attr.id]': '"footer"',
    '[class.dark]': 'true',
  },
})
export class FooterComponent {
  constructor(
    @Inject(ALAIN_I18N_TOKEN) public i18n: I18NService,
    private msg: NzMessageService,
  ) {}

  onCopy(value: string) {
    copy(value).then(() =>
      this.msg.success(this.i18n.fanyi('app.demo.copied')),
    );
  }
}
