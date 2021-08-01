import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { AlainConfigService } from '@delon/util/config';

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
    this._dir = value;
    this.updateLibConfig();
    this.updateHtml();
    // Should be wait inited
    Promise.resolve().then(() => {
      (this.d as NzSafeAny).value = value;
      this.d.change.emit(value);
      this.srv.setLayout(RTL_DIRECTION, value);
    });
  }

  /**
   * Get the next text direction
   *
   * 获取下一次文字方向
   */
  get nextDir(): Direction {
    return this.dir === LTR ? RTL : LTR;
  }

  /**
   * Subscription change notification
   *
   * 订阅变更通知
   */
  get change(): Observable<Direction> {
    return this.srv.notify.pipe(
      filter(w => w.name === RTL_DIRECTION),
      map(v => v.value)
    );
  }

  constructor(
    private d: Directionality,
    private srv: SettingsService,
    private nz: NzConfigService,
    private delon: AlainConfigService,
    private platform: Platform,
    @Inject(DOCUMENT) private doc: NzSafeAny
  ) {
    this.dir = srv.layout.direction === RTL ? RTL : LTR;
  }

  /**
   * Toggle text direction
   *
   * 切换文字方向
   */
  toggle(): void {
    this.dir = this.nextDir;
  }

  private updateHtml(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    const htmlEl = this.doc.querySelector('html') as HTMLElement;
    if (htmlEl) {
      const dir = this.dir;
      htmlEl.style.direction = dir;
      htmlEl.classList.remove(RTL, LTR);
      htmlEl.classList.add(dir);
      htmlEl.setAttribute(HTML_DIR, dir);
    }
  }

  private updateLibConfig(): void {
    RTL_NZ_COMPONENTS.forEach(name => {
      this.nz.set(name as NzSafeAny, { nzDirection: this.dir });
    });
    RTL_DELON_COMPONENTS.forEach(name => {
      this.delon.set(name as NzSafeAny, { direction: this.dir });
    });
  }
}
