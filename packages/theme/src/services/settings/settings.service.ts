import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { App, Layout, SettingsNotify, User } from './interface';

const LAYOUT_KEY = 'layout';
const USER_KEY = 'user';
const APP_KEY = 'app';

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
        ...this.get(LAYOUT_KEY),
      };
      this.set(LAYOUT_KEY, this._layout);
    }
    return this._layout;
  }

  get app(): App {
    if (!this._app) {
      this._app = {
        year: new Date().getFullYear(),
        ...this.get(APP_KEY),
      };
      this.set(APP_KEY, this._app);
    }
    return this._app;
  }

  get user(): User {
    if (!this._user) {
      this._user = { ...this.get(USER_KEY) };
      this.set(USER_KEY, this._user);
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
    this.set(LAYOUT_KEY, this._layout);
    // tslint:disable-next-line:no-any
    this.notify$.next({ type: 'layout', name, value } as any);
    return true;
  }

  setApp(value: App) {
    this._app = value;
    this.set(APP_KEY, value);
    this.notify$.next({ type: 'app', value });
    return true;
  }

  setUser(value: User) {
    this._user = value;
    this.set(USER_KEY, value);
    this.notify$.next({ type: 'user', value });
    return true;
  }
}
