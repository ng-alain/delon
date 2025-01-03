import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  booleanAttribute,
  inject
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { NzColor, NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  host: {
    '[class.footer]': 'true',
    '[class.footer__dark]': 'true',
    '[class.footer__small]': 'small'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzGridModule, NzColorPickerModule, I18nPipe, RouterLink]
})
export class FooterComponent {
  readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly msg = inject(NzMessageService);
  private readonly iconSrv = inject(NzIconService);
  private readonly ngZone = inject(NgZone);
  private readonly cdr = inject(ChangeDetectorRef);

  color = `#1890ff`;
  lessLoaded = false;

  @Input({ transform: booleanAttribute }) small = false;

  onCopy(value: string): void {
    copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
  }

  changeColor(res: { color: NzColor; format: string }): void {
    const hex = res.color.toHexString();
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--ant-primary-color', hex);
    this.ngZone.run(() => {
      this.color = hex;
      this.iconSrv.twoToneColor.primaryColor = this.color;
      this.msg.success(this.i18n.fanyi('app.footer.primary-color-changed'));
      this.cdr.detectChanges();
    });
  }
}
