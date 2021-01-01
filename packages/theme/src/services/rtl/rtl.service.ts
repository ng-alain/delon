import { Direction } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { SettingsService } from '../settings/settings.service';

export const HTML_DIR = 'dir';
export const RTL_DIRECTION = 'direction';
export const RTL_NZ_COMPONENTS = ['modal', 'drawer', 'message', 'notification', 'image'];
export const RTL_DELON_COMPONENTS = ['loading', 'onboarding'];
export const LTR = 'ltr';
export const RTL = 'rtl';

@Injectable({ providedIn: 'root' })
export class RTLService {
  private _dir: Direction = LTR;
  /**
   * Get or Set the current text direction
   *
   * 获取或设置当前文字方向
   */
  get dir(): Direction {
    return this._dir;
  }
  set dir(value: Direction) {
    this.srv.setLayout(RTL_DIRECTION, value);
    this._dir = value;
    this.updateLibConfig();
    this.updateHtml();
  }

  /**
   * Get the next text direction
   *
   * 获取下一次文字方向
   */
  get nextDir(): Direction {
    return this.dir === LTR ? RTL : LTR;
  }

  constructor(
    private srv: SettingsService,
    private nz: NzConfigService,
    private delon: AlainConfigService,
    private platform: Platform,
    @Inject(DOCUMENT) private doc: any,
  ) {
    this.dir = srv.layout.direction === RTL ? RTL : LTR;
  }

  private updateHtml(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    const htmlEl = this.doc.querySelector('html') as HTMLElement;
    if (htmlEl) {
      htmlEl.setAttribute(HTML_DIR, this.dir);
    }
  }

  private updateLibConfig(): void {
    RTL_NZ_COMPONENTS.forEach(name => {
      this.nz.set(name as any, { nzDirection: this.dir });
    });
    RTL_DELON_COMPONENTS.forEach(name => {
      this.delon.set(name as any, { direction: this.dir });
    });
  }
}
