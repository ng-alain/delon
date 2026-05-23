import { ChangeDetectionStrategy, Component, computed, inject, input, model, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ModuleDocDemoItem } from '@script-type';

import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { CodeService, SITE_THEME } from '@core';

import { EditButtonComponent } from '../edit-button/edit-button.component';

@Component({
  selector: 'code-box',
  template: `
    @let item = this.item();
    <section class="code-box-demo" [style]="{ background: item.bg }">
      <div [class.browser-mockup]="item.browser" [style]="{ height: item.browser + 'px' }">
        <div [class.browser-scroll]="item.browser">
          <ng-content />
        </div>
      </div>
    </section>
    <section class="code-box-meta markdown">
      @if (type() === 'default') {
        <div class="code-box-title">
          {{ title() }}
          <edit-button [path]="item.path" />
        </div>
        <div class="code-box-description" [innerHTML]="summary()"></div>
      }
      <div class="code-box-actions">
        @let copied = this.copied();
        @let expand = this.expand();
        <nz-icon nz-tooltip (click)="openOnlineIDE()" nzType="thunderbolt" nzTheme="fill" class="code-box-code-icon" />
        <nz-icon
          nz-tooltip
          [nzTooltipTitle]="'app.demo.copy' | i18n"
          (click)="onCopy(item.code)"
          [nzType]="copied ? 'check' : 'snippets'"
          class="code-box-code-icon"
          [class.ant-tooltip-open]="copied"
        />
        <i nz-tooltip [nzTooltipTitle]="expand ? 'Hide Code' : 'Show Code'" class="code-expand-icon">
          <img
            alt="expand code"
            [src]="
              theme() === 'dark'
                ? 'https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg'
                : 'https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg'
            "
            [class.code-expand-icon-hide]="expand"
            [class.code-expand-icon-show]="!expand"
            (click)="handle()"
          />
          <img
            alt="expand code"
            [src]="
              theme() === 'dark'
                ? 'https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg'
                : 'https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg'
            "
            [class.code-expand-icon-show]="expand"
            [class.code-expand-icon-hide]="!expand"
            (click)="handle()"
          />
        </i>
      </div>
    </section>
    <section class="highlight-wrapper" [class.highlight-wrapper-expand]="expand">
      <div class="highlight">
        <pre class="hljs language-ts"><code>{{item.code}}</code></pre>
      </div>
    </section>
  `,
  host: {
    class: 'code-box',
    '[class.expand]': 'expand()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [I18nPipe, NzTooltipModule, NzIconModule, EditButtonComponent]
})
export class CodeBoxComponent {
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly msg = inject(NzMessageService);
  private readonly codeSrv = inject(CodeService);
  private readonly i18nChange = toSignal(this.i18n.change);

  protected readonly copied = signal(false);
  protected theme = SITE_THEME;

  readonly item = input.required<ModuleDocDemoItem>();
  readonly type = input<'default' | 'simple'>('default');
  readonly expand = model(false);

  protected readonly title = computed(() => {
    this.i18nChange();
    return this.i18n.get(this.item().title);
  });

  protected readonly summary = computed(() => {
    this.i18nChange();
    return this.i18n.get(this.item().summary);
  });

  handle(): void {
    this.expand.set(!this.expand());
  }

  openOnlineIDE(ide: 'StackBlitz' | 'CodeSandbox' = 'StackBlitz'): void {
    if (ide === 'StackBlitz') {
      this.codeSrv.openOnStackBlitz(this.title(), this.item().code);
    } else {
      // this.msg.warning(`CodeSandbox does not support Angular 13, pls use StackBlitz!`);
      this.codeSrv.openOnCodeSandbox(this.title(), this.item().code);
    }
  }

  onCopy(value: string): void {
    copy(value).then(() => {
      this.msg.success(this.i18n.fanyi('app.demo.copied'));
      this.copied.set(true);
      setTimeout(() => {
        this.copied.set(false);
      }, 1000);
    });
  }
}
