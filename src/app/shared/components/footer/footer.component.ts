import { Platform } from '@angular/cdk/platform';
import { NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnInit,
  booleanAttribute,
  inject
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { LoadingService } from '@delon/abc/loading';
import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { LazyService } from '@delon/util/other';
import { NzColor, NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
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
  standalone: true,
  imports: [NzGridModule, NzColorPickerModule, NgStyle, I18nPipe, RouterLink]
})
export class FooterComponent implements OnInit {
  readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly msg = inject(NzMessageService);
  private readonly loading = inject(LoadingService);
  private readonly lazy = inject(LazyService);
  private readonly iconSrv = inject(NzIconService);
  private readonly ngZone = inject(NgZone);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly platform = inject(Platform);

  color = `#1890ff`;
  lessLoaded = false;

  @Input({ transform: booleanAttribute }) small = false;

  onCopy(value: string): void {
    copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
  }

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.initColor();
  }

  // region: color
  initColor(): void {
    const node = document.createElement('link');
    node.rel = 'stylesheet/less';
    node.type = 'text/css';
    node.href = '/assets/color.less';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  changeColor(res: { color: NzColor; format: string }): void {
    const changeColor = (): void => {
      this.ngZone.runOutsideAngular(() => {
        const hex = res.color.toHexString();
        (window as NzSafeAny).less
          .modifyVars({
            '@primary-color': hex
          })
          .then(() => {
            window.scrollTo(0, 0);
            this.ngZone.run(() => {
              this.color = hex;
              this.iconSrv.twoToneColor.primaryColor = this.color;
              this.msg.success(this.i18n.fanyi('app.footer.primary-color-changed'));
              this.cdr.detectChanges();
            });
            this.loading.close();
          });
      });
    };

    const lessUrl = 'https://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js';

    this.loading.open({ text: 'Compiling....' });
    if (this.lessLoaded) {
      changeColor();
    } else {
      this.lazy.loadScript(lessUrl).then(() => {
        this.lessLoaded = true;
        (window as NzSafeAny).less.options.javascriptEnabled = true;
        changeColor();
      });
    }
  }

  // endregion
}
