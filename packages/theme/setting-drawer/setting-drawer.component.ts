import { Direction, Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  isDevMode,
  NgZone,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import { Layout, SettingsService } from '@delon/theme';
import { InputBoolean } from '@delon/util/decorator';
import { copy, deepCopy, LazyService } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ALAINDEFAULTVAR, DEFAULT_COLORS, DEFAULT_VARS } from './setting-drawer.types';

@Component({
  selector: 'setting-drawer',
  templateUrl: './setting-drawer.component.html',
  host: {
    '[class.setting-drawer]': 'true',
    '[class.setting-drawer-rtl]': `dir === 'rtl'`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingDrawerComponent implements OnInit, OnDestroy {
  @Input() @InputBoolean() autoApplyColor = true;
  @Input() devTips = `When the color can't be switched, you need to run it once: npm run color-less`;

  private loadedLess = false;
  private destroy$ = new Subject<void>();
  dir: Direction = 'ltr';
  isDev = isDevMode();
  collapse = false;
  get layout(): Layout {
    return this.settingSrv.layout;
  }
  data: any = {};
  color: string;
  colors = DEFAULT_COLORS;

  constructor(
    private cdr: ChangeDetectorRef,
    private msg: NzMessageService,
    private settingSrv: SettingsService,
    private lazy: LazyService,
    private zone: NgZone,
    @Inject(DOCUMENT) private doc: any,
    @Optional() private directionality: Directionality,
  ) {
    this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
    this.resetData(this.cachedData, false);
  }

  private get cachedData(): { [key: string]: any } {
    return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
  }

  private get DEFAULT_PRIMARY(): string {
    return DEFAULT_VARS['primary-color'].default;
  }

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
    if (this.autoApplyColor && this.color !== this.DEFAULT_PRIMARY) {
      this.changeColor(this.color);
      this.runLess();
    }
  }

  private async loadLess(): Promise<void> {
    if (this.loadedLess) {
      return Promise.resolve();
    }
    return this.lazy
      .loadStyle('./assets/color.less', 'stylesheet/less')
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
      .then(() => this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'))
      .then(() => {
        this.loadedLess = true;
      });
  }

  private genVars(): any {
    const { data, color, validKeys } = this;
    const vars: any = {
      [`@primary-color`]: color,
    };
    validKeys.filter(key => key !== 'primary-color').forEach(key => (vars[`@${key}`] = data[key].value));
    this.setLayout(ALAINDEFAULTVAR, vars);
    return vars;
  }

  private runLess(): void {
    const { zone, msg, cdr } = this;
    const msgId = msg.loading(`正在编译主题！`, { nzDuration: 0 }).messageId;
    setTimeout(() => {
      zone.runOutsideAngular(() => {
        this.loadLess().then(() => {
          (window as any).less.modifyVars(this.genVars()).then(() => {
            msg.success('成功');
            msg.remove(msgId);
            zone.run(() => cdr.detectChanges());
          });
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

  setLayout(name: string, value: any): void {
    this.settingSrv.setLayout(name, value);
  }

  private resetData(nowData?: { [key: string]: NzSafeAny }, run: boolean = true): void {
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
