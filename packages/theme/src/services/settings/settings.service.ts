import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { App, Layout, SettingsNotify, User } from './interface';

export const LAYOUT = 'layout';

export const USER = 'user';

export const APP = 'app';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private notify$ = new Subject<SettingsNotify>();
  private _app: App = null;
  private _user: User = null;
  private _layout: Layout = null;

  private get(key: string) {
    return JSON.parse(localStorage.getItem(key) || 'null') || null;
  }

  // tslint:disable-next-line:no-any
  private set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get layout(): Layout {
    if (!this._layout) {
      this._layout = {
        fixed: true,
        collapsed: false,
        boxed: false,
        lang: null,
        ...this.get(LAYOUT),
      };
      this.set(LAYOUT, this._layout);
    }
    return this._layout;
  }

  get app(): App {
    if (!this._app) {
      this._app = {
        year: new Date().getFullYear(),
        ...this.get(APP),
      };
      this.set(APP, this._app);
    }
    return this._app;
  }

  get user(): User {
    if (!this._user) {
      this._user = { ...this.get(USER) };
      this.set(USER, this._user);
    }
    return this._user;
  }

  get notify(): Observable<SettingsNotify> {
    return this.notify$.asObservable();
  }

  // tslint:disable-next-line:no-any
  setLayout(name: string | Layout, value?: any): boolean {
    if (typeof name === 'string') {
      this.layout[name] = value;
    } else {
      this._layout = name;
    }
    this.set(LAYOUT, this._layout);
    // tslint:disable-next-line:no-any
    this.notify$.next({ type: 'layout', name, value } as any);
    return true;
  }

  setApp(value: App) {
    this._app = value;
    this.set(APP, value);
    this.notify$.next({ type: 'app', value });
    return true;
  }

  setUser(value: User) {
    this._user = value;
    this.set(USER, value);
    this.notify$.next({ type: 'user', value });
    return true;
  }
}
