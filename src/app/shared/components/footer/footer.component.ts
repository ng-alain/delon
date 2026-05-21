import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, booleanAttribute, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { NzColor, NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer__wrap">
      <div nz-row>
        <div nz-col nzXs="24" nzSm="24" nzLg="6">
          <div class="footer__center">
            <h2>ng-alain</h2>
            <div><a href="https://github.com/ng-alain/ng-alain" target="_blank">Github</a></div>
            <div><a href="https://github.com/ng-alain/delon" target="_blank">&#64;delon</a></div>
            <div><a href="https://github.com/ng-alain/ng-zorro-vscode" target="_blank">ng-zorro-vscode</a></div>
            <div><a href="https://github.com/ng-alain/ng-alain-vscode" target="_blank">ng-alain-vscode</a></div>
          </div>
        </div>
        <div nz-col nzXs="24" nzSm="24" nzLg="6">
          <div class="footer__center">
            <h2>{{ 'app.footer.resources' | i18n }}</h2>
            <div>
              <a href="https://www.angular.cn/" target="_blank">Angular</a>
              <span> - </span>
              {{ 'app.footer.angular' | i18n }}
            </div>
            <div>
              <a href="https://ng.ant.design" target="_blank">ng-zorro-antd</a>
              <span> - </span>
              {{ 'app.footer.antd' | i18n }}
            </div>
            <div>
              <a href="https://cli.angular.io/" target="_blank">CLI</a>
              <span> - </span>
              {{ 'app.footer.cli' | i18n }}
            </div>
            <div>
              <a href="https://antv.alipay.com/" target="_blank">AntV</a>
              <span> - </span>
              {{ 'app.footer.antv' | i18n }}
            </div>
          </div>
        </div>
        <div nz-col nzXs="24" nzSm="24" nzLg="6">
          <div class="footer__center">
            <h2>{{ 'app.footer.community' | i18n }}</h2>
            <div>
              <a routerLink="/docs/changelog/{{ i18n.zone }}">{{ 'app.footer.change-log' | i18n }}</a>
            </div>
            <div>
              <a routerLink="/docs/faq/{{ i18n.zone }}">{{ 'app.footer.faq' | i18n }}</a>
            </div>
            <div>
              <a href="https://github.com/ng-alain/ng-alain/issues" target="_blank">{{ 'app.footer.issues' | i18n }}</a>
            </div>
            <div>
              <a href="https://ng-alain.com/issue-helper/index.html#{{ i18n.zone }}" target="_blank">{{
                'app.footer.issue-help' | i18n
              }}</a>
            </div>
            <div>
              <a (click)="onCopy('316911865')">{{ 'app.footer.qqgroup' | i18n }} 1: 316911865</a>
            </div>
            <div>
              <a (click)="onCopy('428749721')">{{ 'app.footer.qqgroup' | i18n }} 2: 428749721</a>
            </div>
          </div>
        </div>
        <div nz-col nzXs="24" nzSm="24" nzLg="6">
          <div class="footer__center">
            Copyright &copy; 2024 <a href="https://github.com/cipchk" target="_blank">&copy;卡色</a>
            <p class="mt-sm">
              <a href="https://beian.miit.gov.cn/" target="_blank" class="text-grey">闽ICP备18008195号</a>
            </p>
            <div class="mt-lg">
              <nz-color-picker class="theme-color" [nzValue]="color" (nzOnChange)="changeColor($event)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  host: {
    class: 'footer footer__dark',
    '[class.footer__small]': 'small'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzGridModule, NzColorPickerModule, I18nPipe, RouterLink]
})
export class FooterComponent {
  readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly msg = inject(NzMessageService);
  private readonly iconSrv = inject(NzIconService);
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
    this.color = hex;
    this.iconSrv.twoToneColor.primaryColor = this.color;
    this.msg.success(this.i18n.fanyi('app.footer.primary-color-changed'));
    this.cdr.detectChanges();
  }
}
