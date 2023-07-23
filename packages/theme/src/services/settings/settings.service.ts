import { Platform } from '@angular/cdk/platform';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { App, Layout, SettingsNotify, User } from './types';

export interface SettingsKeys {
  /** Layout data specifies the stored key,  default: `layout` */
  layout: string;
  /** User data specifies the stored key,  default: `user` */
  user: string;
  /** App data specifies the stored key,  default: `app` */
  app: string;
}

export const ALAIN_SETTING_KEYS = new InjectionToken<SettingsKeys>('ALAIN_SETTING_KEYS');

@Injectable({ providedIn: 'root' })
export class SettingsService<L extends Layout = Layout, U extends User = User, A extends App = App> {
  private notify$ = new Subject<SettingsNotify>();
  private _app: A | null = null;
  private _user: U | null = null;
  private _layout: L | null = null;

  constructor(
    private platform: Platform,
    @Inject(ALAIN_SETTING_KEYS) private KEYS: SettingsKeys
  ) {}

  getData(key: string): NzSafeAny {
    if (!this.platform.isBrowser) {
      return null;
    }
    return JSON.parse(localStorage.getItem(key) || 'null') || null;
  }

  setData(key: string, value: NzSafeAny): void {
    if (!this.platform.isBrowser) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }

  get layout(): L {
    if (!this._layout) {
      this._layout = {
        fixed: true,
        collapsed: false,
        boxed: false,
        lang: null,
        ...this.getData(this.KEYS.layout)
      };
      this.setData(this.KEYS.layout, this._layout);
    }
    return this._layout as L;
  }

  get app(): A {
    if (!this._app) {
      this._app = {
        year: new Date().getFullYear(),
        ...this.getData(this.KEYS.app)
      };
      this.setData(this.KEYS.app, this._app);
    }
    return this._app as A;
  }

  get user(): U {
    if (!this._user) {
      this._user = { ...this.getData(this.KEYS.user) };
      this.setData(this.KEYS.user, this._user);
    }
    return this._user as U;
  }

  get notify(): Observable<SettingsNotify> {
    return this.notify$.asObservable();
  }

  setLayout<T extends Layout = Layout>(name: T, value?: NzSafeAny): boolean;
  setLayout(name: string | L, value?: NzSafeAny): boolean;
  setLayout(name: string | L, value?: NzSafeAny): boolean {
    if (typeof name === 'string') {
      (this.layout as Layout)[name] = value;
    } else {
      this._layout = name;
    }
    this.setData(this.KEYS.layout, this._layout);
    this.notify$.next({ type: 'layout', name, value } as NzSafeAny);
    return true;
  }
  getLayout<T>(): T {
    return this._layout as unknown as T;
  }

  setApp<T extends App = App>(value: T): void;
  setApp(value: A): void;
  setApp(value: A): void {
    this._app = value;
    this.setData(this.KEYS.app, value);
    this.notify$.next({ type: 'app', value });
  }
  getApp<T>(): T {
    return this._app as unknown as T;
  }

  setUser<T extends User = User>(value: T): void;
  setUser(value: U): void;
  setUser(value: U): void {
    this._user = value;
    this.setData(this.KEYS.user, value);
    this.notify$.next({ type: 'user', value });
  }
  getUser<T>(): T {
    return this._user as unknown as T;
  }
}
