import { Platform } from '@angular/cdk/platform';
import { Injectable, InjectionToken, Provider, inject, signal } from '@angular/core';
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
export const ALAIN_SETTING_DEFAULT: Provider = {
  provide: ALAIN_SETTING_KEYS,
  useValue: {
    layout: 'layout',
    user: 'user',
    app: 'app'
  }
};

@Injectable({ providedIn: 'root' })
export class SettingsService<L extends Layout = Layout, U extends User = User, A extends App = App> {
  private readonly KEYS = inject(ALAIN_SETTING_KEYS);
  private readonly platform = inject(Platform);

  private notify$ = new Subject<SettingsNotify>();
  readonly appSignal = signal<A>({
    year: new Date().getFullYear(),
    ...this.getData(this.KEYS.app)
  });
  readonly userSignal = signal<U>({ ...this.getData(this.KEYS.user) });
  readonly layoutSignal = signal<L>({
    fixed: true,
    collapsed: false,
    boxed: false,
    lang: null,
    ...this.getData(this.KEYS.layout)
  });

  getData(key: string): NzSafeAny {
    if (!this.platform.isBrowser) {
      return null;
    }
    return JSON.parse(localStorage.getItem(key) ?? 'null') ?? null;
  }

  setData(key: string, value: NzSafeAny): void {
    if (!this.platform.isBrowser) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }

  get layout(): L {
    return this.layoutSignal() as L;
  }

  get app(): A {
    return this.appSignal() as A;
  }

  get user(): U {
    return this.userSignal() as U;
  }

  get notify(): Observable<SettingsNotify> {
    return this.notify$.asObservable();
  }

  setLayout<T extends Layout = Layout>(name: T, value?: NzSafeAny): boolean;
  setLayout(name: string | L, value?: NzSafeAny): boolean;
  setLayout(name: string | L, value?: NzSafeAny): boolean {
    this.layoutSignal.update(l => {
      if (typeof name === 'string') {
        (l as Layout)[name] = value;
        return { ...l };
      }
      return { ...name };
    });
    this.setData(this.KEYS.layout, this.layout);
    this.notify$.next({ type: 'layout', name, value } as NzSafeAny);
    return true;
  }
  getLayout<T>(): T {
    return this.layout as unknown as T;
  }

  setApp<T extends App = App>(value: T): void;
  setApp(value: A): void;
  setApp(value: A): void {
    this.appSignal.set(value);
    this.setData(this.KEYS.app, value);
    this.notify$.next({ type: 'app', value });
  }
  getApp<T>(): T {
    return this.app as unknown as T;
  }

  setUser<T extends User = User>(value: T): void;
  setUser(value: U): void;
  setUser(value: U): void {
    this.userSignal.set(value);
    this.setData(this.KEYS.user, value);
    this.notify$.next({ type: 'user', value });
  }
  getUser<T>(): T {
    return this.user as unknown as T;
  }
}
