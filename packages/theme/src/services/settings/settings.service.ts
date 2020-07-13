import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { App, Layout, SettingsNotify, User } from './interface';

export const LAYOUT = 'layout';

export const USER = 'user';

export const APP = 'app';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private notify$ = new Subject<SettingsNotify>();
  private _app: App | null = null;
  private _user: User | null = null;
  private _layout: Layout | null = null;

  constructor(private platform: Platform) {}

  getData(key: string) {
    if (!this.platform.isBrowser) {
      return null;
    }
    return JSON.parse(localStorage.getItem(key) || 'null') || null;
  }

  setData(key: string, value: any) {
    if (!this.platform.isBrowser) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }

  get layout(): Layout {
    if (!this._layout) {
      this._layout = {
        fixed: true,
        collapsed: false,
        boxed: false,
        lang: null,
        ...this.getData(LAYOUT),
      };
      this.setData(LAYOUT, this._layout);
    }
    return this._layout as Layout;
  }

  get app(): App {
    if (!this._app) {
      this._app = {
        year: new Date().getFullYear(),
        ...this.getData(APP),
      };
      this.setData(APP, this._app);
    }
    return this._app as App;
  }

  get user(): User {
    if (!this._user) {
      this._user = { ...this.getData(USER) };
      this.setData(USER, this._user);
    }
    return this._user as User;
  }

  get notify(): Observable<SettingsNotify> {
    return this.notify$.asObservable();
  }

  setLayout(name: string | Layout, value?: any): boolean {
    if (typeof name === 'string') {
      this.layout[name] = value;
    } else {
      this._layout = name;
    }
    this.setData(LAYOUT, this._layout);
    this.notify$.next({ type: 'layout', name, value } as any);
    return true;
  }

  setApp(value: App) {
    this._app = value;
    this.setData(APP, value);
    this.notify$.next({ type: 'app', value });
    return true;
  }

  setUser(value: User) {
    this._user = value;
    this.setData(USER, value);
    this.notify$.next({ type: 'user', value });
    return true;
  }
}
