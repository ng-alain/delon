import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  isDevMode,
  NgZone,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Layout, SettingsService } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { ZoneOutside } from '@delon/util/decorator';
import { deepCopy, LazyService } from '@delon/util/other';
import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

import { SettingDrawerItemComponent } from './setting-drawer-item.component';
import { ALAINDEFAULTVAR, DEFAULT_COLORS, DEFAULT_VARS } from './setting-drawer.types';

@Component({
  selector: 'setting-drawer',
  templateUrl: './setting-drawer.component.html',
  host: {
    '[class.setting-drawer]': 'true',
    '[class.setting-drawer-rtl]': `dir() === 'rtl'`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    NzDrawerModule,
    NzTooltipDirective,
    NzIconDirective,
    NzDividerModule,
    NzTabsModule,
    SettingDrawerItemComponent,
    NzSwitchModule,
    NzButtonComponent,
    NzAlertComponent
  ]
})
export class SettingDrawerComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly msg = inject(NzMessageService);
  private readonly settingSrv = inject(SettingsService);
  private readonly lazy = inject(LazyService);
  private readonly ngZone = inject(NgZone);
  private readonly doc = inject(DOCUMENT);

  @Input({ transform: booleanAttribute }) autoApplyColor = true;
  @Input() compilingText = 'Compiling...';
  @Input() devTips = `When the color can't be switched, you need to run it once: npm run color-less`;
  @Input() lessJs = 'https://cdn.jsdelivr.net/npm/less';

  private loadedLess = false;
  dir = inject(Directionality).valueSignal;
  isDev = isDevMode();
  collapse = false;
  get layout(): Layout {
    return this.settingSrv.layout;
  }
  data: NzSafeAny = {};
  color: string;
  colors = DEFAULT_COLORS;

  constructor() {
    this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
    this.resetData(this.cachedData, false);
  }

  private get cachedData(): Record<string, NzSafeAny> {
    return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
  }

  private get DEFAULT_PRIMARY(): string {
    return DEFAULT_VARS['primary-color'].default;
  }

  ngOnInit(): void {
    if (this.autoApplyColor && this.color !== this.DEFAULT_PRIMARY) {
      this.changeColor(this.color);
      this.runLess();
    }
  }

  @ZoneOutside()
  private async loadLess(): Promise<void> {
    if (this.loadedLess) {
      return Promise.resolve();
    }
    return this.lazy
      .loadStyle('./assets/color.less', { rel: 'stylesheet/less' })
      .then(() => {
        const lessConfigNode = this.doc.createElement('script');
        lessConfigNode.innerHTML = `
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `;
        this.doc.body.appendChild(lessConfigNode);
      })
      .then(() => this.lazy.loadScript(this.lessJs))
      .then(() => {
        this.loadedLess = true;
      });
  }

  private genVars(): NzSafeAny {
    const { data, color, validKeys } = this;
    const vars: Record<string, string> = {
      [`@primary-color`]: color
    };
    validKeys.filter(key => key !== 'primary-color').forEach(key => (vars[`@${key}`] = data[key].value));
    this.setLayout(ALAINDEFAULTVAR, vars);
    return vars;
  }

  @ZoneOutside()
  private runLess(): void {
    const { ngZone, msg, cdr } = this;
    const msgId = msg.loading(this.compilingText, { nzDuration: 0 }).messageId;
    setTimeout(() => {
      this.loadLess().then(() => {
        (window as NzSafeAny).less.modifyVars(this.genVars()).then(() => {
          msg.success('成功');
          msg.remove(msgId);
          ngZone.run(() => cdr.detectChanges());
        });
      });
    }, 200);
  }

  toggle(): void {
    this.collapse = !this.collapse;
  }

  changeColor(color: string): void {
    this.color = color;
    Object.keys(DEFAULT_VARS)
      .filter(key => DEFAULT_VARS[key].default === '@primary-color')
      .forEach(key => delete this.cachedData[`@${key}`]);
    this.resetData(this.cachedData, false);
  }

  setLayout(name: string, value: NzSafeAny): void {
    this.settingSrv.setLayout(name, value);
  }

  private resetData(nowData?: Record<string, NzSafeAny>, run: boolean = true): void {
    nowData = nowData || {};
    const data = deepCopy(DEFAULT_VARS);
    Object.keys(data).forEach(key => {
      const value = nowData![`@${key}`] || data[key].default || '';
      data[key].value = value === `@primary-color` ? this.color : value;
    });
    this.data = data;
    if (run) {
      this.cdr.detectChanges();
      this.runLess();
    }
  }

  private get validKeys(): string[] {
    return Object.keys(this.data).filter(key => this.data[key].value !== this.data[key].default);
  }

  apply(): void {
    this.runLess();
  }

  reset(): void {
    this.color = this.DEFAULT_PRIMARY;
    this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
    this.resetData({});
  }

  copyVar(): void {
    const vars = this.genVars();
    const copyContent = Object.keys(vars)
      .map(key => `${key}: ${vars[key]};`)
      .join('\n');
    copy(copyContent);
    this.msg.success('Copy success');
  }
}
