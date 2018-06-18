import { Injectable } from '@angular/core';
import { App, Layout, User } from './interface';

const LAYOUT_KEY = 'layout';
const USER_KEY = 'user';
const APP_KEY = 'app';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private _app: App = null;
  private _user: User = null;
  private _layout: Layout = null;

  public get(key: string) {
    return JSON.parse(localStorage.getItem(key) || 'null') || null;
  }

  public set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get layout(): Layout {
    if (!this._layout) {
      this._layout = Object.assign(
        <Layout>{
          fixed: true,
          collapsed: false,
          boxed: false,
          lang: null,
        },
        this.get(LAYOUT_KEY),
      );
      this.set(LAYOUT_KEY, this._layout);
    }
    return this._layout;
  }

  get app(): App {
    if (!this._app) {
      this._app = Object.assign(
        <App>{
          year: new Date().getFullYear(),
        },
        this.get(APP_KEY),
      );
      this.set(APP_KEY, this._app);
    }
    return this._app;
  }

  get user(): User {
    if (!this._user) {
      this._user = Object.assign(<User>{}, this.get(USER_KEY));
      this.set(USER_KEY, this._user);
    }
    return this._user;
  }

  setLayout(name: string, value: any): boolean {
    if (typeof this.layout[name] !== 'undefined') {
      this.layout[name] = value;
      this.set(LAYOUT_KEY, this._layout);
      return true;
    }
    return false;
  }

  setApp(val: App) {
    this._app = val;
    this.set(APP_KEY, val);
  }

  setUser(val: User) {
    this._user = val;
    this.set(USER_KEY, val);
  }
}
