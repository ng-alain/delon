import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, NgZone, OnInit } from '@angular/core';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { copy, InputBoolean, LazyService } from '@delon/util';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  host: {
    '[class.footer]': 'true',
    '[class.footer__dark]': 'true',
    '[class.footer__small]': 'small',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  color = `#1890ff`;
  lessLoaded = false;

  @Input() @InputBoolean() small = false;

  constructor(
    @Inject(ALAIN_I18N_TOKEN) public i18n: I18NService,
    private msg: NzMessageService,
    private lazy: LazyService,
    private iconSrv: NzIconService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    private platform: Platform,
  ) {}

  onCopy(value: string) {
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

  changeColor(res: any): void {
    const changeColor = () => {
      this.ngZone.runOutsideAngular(() => {
        (window as any).less
          .modifyVars({
            '@primary-color': res.color.hex,
          })
          .then(() => {
            window.scrollTo(0, 0);
            this.ngZone.run(() => {
              this.color = res.color.hex;
              this.iconSrv.twoToneColor.primaryColor = this.color;
              this.msg.success(this.i18n.fanyi('app.footer.primary-color-changed'));
              this.cdr.detectChanges();
            });
          });
      });
    };

    const lessUrl = 'https://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js';

    this.msg.loading('');
    if (this.lessLoaded) {
      changeColor();
    } else {
      (window as any).less = {
        async: true,
        javascriptEnabled: true,
      };
      this.lazy.loadScript(lessUrl).then(() => {
        this.lessLoaded = true;
        changeColor();
      });
    }
  }

  // endregion
}
